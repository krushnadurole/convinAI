
const FormSidebar = ({ title, tag }) => {
  return (
      <div className="bgc primary-violet px-9 py-10 sm:flex flex-col gap-4 w-2/5">
          <h1 className="font-medium text-white text-3xl">{title}</h1>
          <p className="text-gray-200 text-lg pr-2">{tag}</p>
      </div>
  )
}

export default FormSidebar