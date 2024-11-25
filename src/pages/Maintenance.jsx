import gomapeach from './assets/goma-peach.gif'

const Maintenance = () => {
  return (
    <>
      <div>
        <h6 className="text-black font-semibold">hairulfauziyyah</h6>
        <h1 className='text-black '>We&apos;ll be back soon</h1>
        <div className="flex justify-center items-center">
          <img src={gomapeach} className="logo" alt="Vite logo" />
        </div>
        <p> Our website is currently undergoing scheduled maintenance. <br />We should be back shortly. Thank you for your patience.</p>
      </div>
    </>
  )
}

export default Maintenance