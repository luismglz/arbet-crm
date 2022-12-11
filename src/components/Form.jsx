export const Form = ({ customer }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="firstname"
        >First name:</label>
        <input
          id="firstname"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Enter customer's first name"
          name="firstname"
          defaultValue={customer?.firstname}
        />
      </div>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="surname"
        >Surname:</label>
        <input
          id="surname"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Enter customer's surname"
          name="surname"
          defaultValue={customer?.surname}
        />
      </div>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="company"
        >Company:</label>
        <input
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Enter customer's company"
          name="company"
          defaultValue={customer?.company}
        />
      </div>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="country"
        >Country:</label>
        <select
          id="country"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Enter customer's country"
          name="country"
          defaultValue={customer?.country}>
          <option disabled={true} >Select customer's country</option>
          <option value='United States'>United States</option>
          <option value='Japan'>Japan</option>
          <option value='India'>India</option>
          <option value='Malaysia'>Malaysia</option>
          <option value='Germany'>Germany</option>
          <option value='South Korea'>South Korea</option>
          <option value='Israel'>Israel</option>
          <option value='Iran'>Iran</option>
          <option value='Hong Kong'>Hong Kong SAR</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="email"
        >E-mail:</label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Enter customer's email"
          name="email"
          defaultValue={customer?.email}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="phone"
        >Phone:</label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Enter customer's phone number"
          name="phone"
          defaultValue={customer?.phone}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="notas"
        >Notes:</label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Enter customer's additional notes"
          name="notes"
          defaultValue={customer?.notes}
        />
      </div>
    </>
  )
}
