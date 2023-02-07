export const Application = () => {
    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="job-location">Job Location</label>
                <select id="job-selection">
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms"/> I agree the terms and the conditions
                </label>
            </div>
            <button> Submit </button>
        </form>
    )
}