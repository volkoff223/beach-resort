import React, { Component } from 'react';
import defautlBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';


export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props.match.params.slug);
        this.state = {
            slug: this.props.match.params.slug,
            defautlBcg
        };
    }
    static contextType = RoomContext;
    //componentDidMount() {}
    render() {
        
        const room = (this.state.slug);
        
        return <Hero hero='roomsHero'>
            <Banner title={`${this.state.name} room`}>
                <Link to='/rooms' className='btn-primary'>
                    back to rooms
                </Link>
            </Banner>
        </Hero>;        
    }
}
