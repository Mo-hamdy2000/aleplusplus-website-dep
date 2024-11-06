import { useState } from "react";

function Objectives() {
  return (
    <>
      <div className="text-center">
        <br/>
        <br/>
        <u className='text-red text-bold text-large'>
          أهداف بيئة التعلم القائمة على إنترنت الأشياء
        </u> 
      </div>
      <div className="text-center">
        <br/>
        <br/>
        <b>الأهداف العامة :</b>
      </div>
      <div className="text-center">
        <div>
        تم تحديد أربعة أهداف عامة لبيئة التعلم القائمة على إنترنت الأشياء وهي أن يُلم الطالب بما يلي: 
        </div>
      </div>
      <div className="text-center">
        <ol>
          <li>القصة الرقمية كأحد مجالات أدب الطفل</li>
          <li>معايير تطوير القصة الرقمية</li>
          <li>مراحل النموذج العام للتصميم التعليمى ADDIE</li>
          <li>مراحل إنتاج قصة رقمية</li>
        </ol>
      </div>
    </>
  );
}

export default Objectives;
