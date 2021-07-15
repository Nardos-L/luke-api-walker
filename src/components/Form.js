const Form = (props) => {
    return (
        <div>
            <form ClassName="row g-3">
                <div ClassName="col-auto">
                    <label for="staticEmail2" ClassName="visually-hidden">Search for:</label>
                    <select ClassName="visually-hidden" aria-label="Default select example">
                        <option value="1">People</option>
                        <option value="2">Planets</option>
                    </select>
                </div>
                <div ClassName="col-auto">
                    <label for="inputPassword2" ClassName="visually-hidden">ID:</label>
                    <input type="password" ClassName="form-control" id="inputPassword2" placeholder="" />
                </div>
                <div ClassName="col-auto">
                    <button type="submit" ClassName="btn btn-primary mb-3">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Form;