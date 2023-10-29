import React from "react";
import { Link } from "react-router-dom";
import { MyContext, MyContextProvider} from "./my-context";
import { useDebounce } from "use-debounce";


export interface MemberApiEntity {
  id: number;
  image:string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {name:string,url:string};

}

export const ListPageApi: React.FC = () => {
  const {value1,value2} = React.useContext(MyContext);
  const [usernameApi,setUsernameApi] = value2;
  const [name, setName] = React.useState(usernameApi) ;
  const [rick,setRick] = React.useState<MemberApiEntity[]>([]) ;
  const [debouncedValue] = useDebounce(name, 900);
 

  const handleChange = e => {
    setName(e.target.value);;
    setUsernameApi(e.target.value);
  };

  React.useEffect(() => 
    {
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((response) => {
            if (!response.ok) {
            alert("No se ha encontrado el personaje");
            setRick([]);
            }else
            {       
                
            response.json().then((resp)=>{
                setRick(resp.results);
            });
            }
            
        })
    }, [debouncedValue]);

  
  return (
    <>   
      <h2>Hello from List page: {usernameApi}</h2>
      <form >
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      
    </form>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {rick.map((member) => (
          < React.Fragment key={member.id}>
            <img src={member.image} />
            <span>{member.id}</span>
            <Link to={`/detail-api/${member.id}`}>{member.name}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
