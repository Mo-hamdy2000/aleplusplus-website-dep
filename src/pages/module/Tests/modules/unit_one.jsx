const unit_one = (
  <>
    <div className="text-center">
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=yCT26sSglUGH0kQ-XXUWzaAVV9VjQxxJrn6YrU7ru2lURVdFRUJGSEVMT1RRWVVOMTRFR0xBUko5Uy4u" style={{
        display: 'inline-block',
        padding: '2rem 1rem',
        margin: '0.5rem',
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'white',
        background: 'linear-gradient(to right, #4ade80, #86efac)', 
        borderRadius: '9999px',
        transition: 'all 0.3s',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        transform: 'scale(1)',
      }} onMouseOver={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to right, #22c55e, #4ade80)'
        e.currentTarget.style.transform = 'scale(1.05)'
      }} onMouseOut={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to right, #4ade80, #86efac)'
        e.currentTarget.style.transform = 'scale(1)'
      }}>
        الاختبار القبلي
      </a>
    </div>
    <div className="text-center">
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=yCT26sSglUGH0kQ-XXUWzaAVV9VjQxxJrn6YrU7ru2lUNTM2UkZQTUQzSFVCWjlZQlVNWkQ0SDYzQy4u" style={{
        display: 'inline-block',
        padding: '2rem 1rem',
        margin: '0.5rem',
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'white',
        background: 'linear-gradient(to right, #4ade80, #86efac)', 
        borderRadius: '9999px',
        transition: 'all 0.3s',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        transform: 'scale(1)',
      }} onMouseOver={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to right, #22c55e, #4ade80)'
        e.currentTarget.style.transform = 'scale(1.05)'
      }} onMouseOut={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to right, #4ade80, #86efac)'
        e.currentTarget.style.transform = 'scale(1)'
      }}>
        الاختبار البعدي
      </a>
    </div>
  </>
)

export default unit_one
