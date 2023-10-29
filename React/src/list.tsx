import React from "react";
import { Link } from "react-router-dom";
import { MyContext, MyContextProvider} from "./my-context";


interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {value1,value2} = React.useContext(MyContext);
  const [username,onChangeUser] = value1;
  const [name, setName] = React.useState(username) ;


  const handleSubmit = (event) =>{   
    lista(name);
    event.preventDefault();
  };

  const handleChange = e => {
    setName(e.target.value);
    onChangeUser(e.target.value);
  };
  
  function lista(name){

    fetch(`https://api.github.com/orgs/${name}/members`)
      .then((response) => {

        if (!response.ok) {
          alert("No se ha encontrado la organización");
          setMembers([]);
        }else
        {       
          response.json().then(setMembers);
        }
        
      })
  } 
  
  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${name}/members`)
    .then((response) => {

      if (!response.ok) {
        alert("No se ha encontrado la organización");
        setMembers([]);
      }else
      {             
        response.json().then(setMembers);
      }
      
    })
  }, []);

  return (
    <>   
      <h2>Hello from List page: {username}</h2>
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          < React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
