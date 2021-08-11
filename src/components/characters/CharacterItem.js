import React from 'react'



const CharacterItem = ({item}) => {
    
    let Occupation = []
    for(let i =0 ; i<item.occupation.length ; i++){
        if(i!=item.occupation.length-1){
            Occupation.push(item.occupation[i]+" , ")
        }
        else{
            Occupation.push(item.occupation[i])
        }
        
    }
    let Seasons =[]
    for(let i =0 ; i<item.appearance.length ; i++){
        if(i!=item.appearance.length-1){
            Seasons.push(item.appearance[i]+" , ")
        }
        else{
            Seasons.push(item.appearance[i])
        }
        
    }

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={item.img} alt='' />
                <h1>{item.name}</h1>
                        <ul>
                            <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                            </li>
                            <li>
                            <strong>Nickname:</strong> {item.nickname}
                            </li>
                            <li>
                            <strong>Birthday:</strong> {item.birthday}
                            </li>
                            <li>
                            <strong>Status:</strong> {item.status}
                            </li>
                            <li>
                            <strong>Occupation:</strong> {Occupation}
                            </li>
                            <li>
                            <strong>Season Appeared:</strong> {Seasons}
                            </li>
                            
                            
                        </ul>
                </div>
                
            </div>
        </div>
        
    )
}

export default CharacterItem
