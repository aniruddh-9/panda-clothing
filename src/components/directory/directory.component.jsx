import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : 
            [{
                title: 'hats',
                imageUrl: 'https://images.pexels.com/photos/991678/pexels-photo-991678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/3608981/pexels-photo-3608981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size : 'large',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size : 'large',
                id: 5
            },
                
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,size,id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;