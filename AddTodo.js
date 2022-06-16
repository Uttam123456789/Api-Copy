import Main from "./Main";
import './main/Style.scss';
const AddTodo = () => {
    localStorage.setItem('isLogin',JSON.stringify([]));
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => window.localStorage.setItem("user", JSON.stringify(json)));

    let users = JSON.parse(localStorage.getItem("user"));
    return (
        <>
            <div className="bg-secondary" id="user">
                {users.map((ele) => {
                    return (
                        <Main ele={ele} />
                    )
                })
                }
            </div>
        </>);
};

export default AddTodo;