interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({message} : ErrorMessageProps) => {
    return <h4>{message}</h4>
}

export default ErrorMessage;