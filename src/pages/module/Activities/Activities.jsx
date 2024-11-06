import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './Activities.css'
import config from '../../../config';
import { AuthContext } from "../../../Components/Auth/AuthcontextProvider";

const ACTIVITY_STATUS = {
  DECIDING: 'deciding', // loading the data for the first time
  NOT_JOINED: 'not_joined', // student didn't click the join button yet
  JOINED: 'not_started', // student clicked the join button but required student count to start the test is not reached yet
  ON_GOING: 'ongoing', // student is doing the test
  ENDED: 'ended', // the test is over
}

const Activities = () => {
  const { id: unitId } = useParams()
  const ctx = useContext(AuthContext);
  const [status, setStatus] = useState(ACTIVITY_STATUS.DECIDING)
  const [myTurn, setMyTurn] = useState(false)
  const [question, setQuestion] = useState('')
  const [link, setLink] = useState('')
  const [intervalId, setIntervalId] = useState(null)

  const resetInterval = () => {
    setIntervalId(null)
    setStatus(ACTIVITY_STATUS.DECIDING)
  }

  useEffect(() => {
    async function fetch() {
      const { data } = await show()
      if (!data) {
        return
      }
      const { status, turns_status } = data
      if (status === ACTIVITY_STATUS.JOINED && Object.values(turns_status).every(value => value === false)) {
        setStatus(ACTIVITY_STATUS.NOT_JOINED)
      }
      else if (status === ACTIVITY_STATUS.ENDED) {
        setStatus(ACTIVITY_STATUS.ENDED)
      }
      else {
        setStatus(status)
        pull()
      }
    }
    resetInterval()
    setStatus(ACTIVITY_STATUS.DECIDING)
    fetch()
  
    return () => {
      if (intervalId) {
        resetInterval()
      }
    }
  }, [unitId])
  
  const join = () => {
    const url = config.API_URL + "activities/join";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${ctx.token}`,
      },
      body: JSON.stringify({ unit_id: unitId })
    })
    .then(async (res) => {
      return res.json();
    })
    .then(({ data }) => {
      const { status } = data
      setStatus(status)
      pull()
    })
    .catch((data) => {
      console.log(data)
    });
  };

  const show = async() => {
    const url = config.API_URL + "activities/1?unit_id=" + unitId;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${ctx.token}`,
        },
      })
      const json = await response.json()
      return json
    }
    catch (error) {
      console.log(error)
    }
  };

  const pull = () => {
    setIntervalId(setInterval(() => {
      show().then(({data}) => {
        const { status, is_my_turn, current_question } = data
        setQuestion(current_question)
        setMyTurn(is_my_turn)
        setStatus(status)
      })
    }, 1000))
  }
  
  const submit = () => {
    if (!link) {
      alert("من فضلك قم بادخال رابط الاجابة")
      return
    }

    const url = config.API_URL + "activities/submit";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${ctx.token}`,
      },
      body: JSON.stringify({ 
        unit_id: unitId,
        link,
      })
    })
    .then((res) => {
      return res.json();
    })
    .catch(() => {});
  };

  const content = () => {
    if (status === ACTIVITY_STATUS.DECIDING) {
      return (
        <div className="deciding-loader" />
      )
    }

    if (status === ACTIVITY_STATUS.NOT_JOINED) {
      return (
        <div onClick={join} className='join-button'>انضم للاختبار</div>
      )
    }
    
    if (status === ACTIVITY_STATUS.JOINED) {
      return (
        <div className='joined-container'>
          <div className="joined-loader" />
          <div className="joined-message"> في انتظار انضمام باقي الطلاب </div>
        </div>
      )
    }

    if (status === ACTIVITY_STATUS.ON_GOING) {
      if (myTurn) {
        return (
          <div className='ongoing-container'>
            <div className="question">{question}</div>
            <input
              type="url"
              placeholder="ادخل رابط الاجابة"
              name="answer"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            /> 
            <div onClick={submit} className='submit-button'>ارسال</div>
          </div>       
        )
      }
      else {
        return (
          <div className='ongoing-container'>
            <div className="ongoing-loader" />
            <div className="ongoing-message">بدأ النشاط....من فضلك انتظر</div>
          </div>
        )
      }
    }

    if (status === ACTIVITY_STATUS.ENDED) {
      return (
        <div className='ended'>تم الإنتهاء من الإختبار</div>
      )
    }
  }
  
  return (
    <div className='page'>
      {content()}
    </div>
  )
}

export default Activities
