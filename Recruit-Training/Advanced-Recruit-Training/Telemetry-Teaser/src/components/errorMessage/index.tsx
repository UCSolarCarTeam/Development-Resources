interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({message} : ErrorMessageProps) => {
    return <h4 className="text-slate-400">{message}</h4>
}

export default ErrorMessage;