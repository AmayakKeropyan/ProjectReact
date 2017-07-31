import React from 'react';


	var CONTACTS = [
		{
		  id: 1,
		  name: 'Krusty Krab',
		  phoneNumber: '8903333333333',
          adress: 'Black Sea',
		  image: '/Pictures/Cafe/crabs.jpg'
		}, {
		  id: 2,
		  name: 'Moes Cafe',
		  phoneNumber: '8999999999999',
          adress: "Simpson's city",
		  image: '/Pictures/Cafe/mo.jpg'
		}, {
		  id: 3,
		  name: 'Pizza Time!',
		  phoneNumber: '8900000000001',
          adress: 'Manhattan',
		  image: '/Pictures/Cafe/tuartal.jpg'
		}
		  
	      ];

var Contact = React.createClass({
    render: function(){
        return         <li className="contact">
                           <div><img className="contact-image" src={this.props.image} width="120px" height="120px" /></div>
                           <div className="contact-info">
                           <div className="contact-name">{this.props.name}</div>
                           <div className="contact-number">Adress: {this.props.adress}</div>
                           <div className="contact-number">Phone: {this.props.phoneNumber}</div>
                           </div>
                      </li>;
                    
}
});

	var ContactList = React.createClass({
    getInitialState: function() {
            return {
                       displayedContacts: CONTACTS            
};
},
        add: function(event) {
                var searchQuery = event.target.value.toLowerCase();
                var displayedContacts = CONTACTS.filter(function(el) {
                    var searchValue = el.name.toLowerCase();
                    var nom=el.phoneNumber.toLowerCase();
                    var adr=el.adress.toLowerCase();
                    return ((adr.indexOf(searchQuery) !== -1) || (searchValue.indexOf(searchQuery) !== -1) || (nom.indexOf(searchQuery) !== -1));
});
               this.setState({
                    displayedContacts: displayedContacts
});
},
        render: function(){
            return (
                    <div className="contacts"> 
                        <h4 className="scills"> Введите название/адрес/номер ресторана </h4>
                        <input className="search-field" type="text" onChange={this.add} />
                      <ul>
                         {
                         this.state.displayedContacts.map(function(el)
                         { 
                         return <Contact 
                                         key={el.id} 
                                         name={el.name}
                                         adress={el.adress}
                                         phoneNumber={el.phoneNumber}
                                         image={el.image} />;
                         })
                         }
                         </ul>
                         </div>
)
}
});

export default ContactList;