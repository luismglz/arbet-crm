import { useRouteError } from "react-router-dom";


export default function Error() {

  const error = useRouteError()


  return (
    <div className="space-y-8">
      <p className="mt-20 text-center text-4xl font-extrabold text-blue-900">There was an error</p>
      <p className="text-center font-bold">{error.statusText || error.message}</p>
    </div>
  )
}
