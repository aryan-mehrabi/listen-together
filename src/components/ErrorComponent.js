import Button from "./Button";

const ErrorComponent = ({ resetErrorBoundary }) => {
  return (
    <div className="bg-primary text-secondary w-full h-screen flex items-center justify-center">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl">OOPS!!</h1>
        <p>Something went wrong!</p>
        <Button className="" type="cta" onClick={() => resetErrorBoundary()}>
          Retry
        </Button>
      </div>
    </div>
  );
};

export default ErrorComponent;
