interface ButtonProp {
    title : string;
    onClick?: () => void;
}

export const PrimaryButton = ({title, onClick} : ButtonProp) => {
    return (
        <button type="button" className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium text-xl rounded-tl-2xl rounded-br-2xl  px-5 py-2.5 text-center me-2 mb-2" 
        onClick={onClick}
        >{title}</button>
    )
}

export const SecondaryButton = ({title} : ButtonProp) => {
    return (
        <button type="button" className="text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-xl rounded-tl-2xl rounded-br-2xl px-5 py-2.5 text-center me-2 mb-2" >{title}</button>
    )
}

export const SubmitButton = ({title} : ButtonProp) =>{
    return (
        <button
            type="submit"
            className="flex justify-end bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

          >
            {title}
            
          </button>
    )
}