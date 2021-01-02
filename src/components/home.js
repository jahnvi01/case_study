import React, { useState, useEffect } from "react";
import logo from './images/google.webp';
import close from './images/close.svg';
import cancel from './images/cancel.svg';
import right from './images/right.svg';
import add from './images/add.svg';
import left from './images/left-arrow.svg';
import {Dropdown} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Progress } from 'antd';

const Home = props => {
	const [show , setShow] = useState(false);
	const [rows , setRows] = useState(["pricing", "features", "caseStudy"]);
	const [totalRows , setTotalRows] = useState(["pricing", "features", "caseStudy","info", "website"]);
    const [vendors, setVendors] = useState([
		{
			id: 1,
			title: "dropbox",
			score: 50,
			description: "This is product Description",
			funding: "Total funding 5$",
			funded: "2002",
			investors: "DFG company",
			founder: "Chris Brown",
			pricing: "1000$",
			features: "5 different features",
			caseStudy: "This is customer case study",
			info: "This is company infor for dropbox",
			website: "www.dropbox.com"
		},
		{
			id: 2,
			title: "Google drive",
			score: 65,
			description: "This is product Description",
			funding: "Total funding 5$",
			funded: "2009",
			investors: "DFG company",
			founder: "Chris Brown",
			pricing: "1000$",
			features: "5 different features",
			caseStudy: "This is customer case study",
			info: "This is company infor for google drive",
			website: "www.drive.com"
		},
		{
			id: 3,
			title: "SalesForce",
			score: 10,
			description: "This is product Description",
			funding: "Total funding 5$",
			funded: "2002",
			investors: "DFG company",
			founder: "Chris Brown",
			pricing: "1000$",
			features: "5 different features",
			caseStudy: "This is customer case study",
			info: "This is company infor for salesForce",
			website: "www.salesforce.com"
		}
	]);
	const [newVendor, setNewVendor] = useState(
		{
			id: 0,
			title: "Add New Vendor",
			score: "Overall Score",
			description: "Product Description",
			funding: "Funding History",
			funded: "Funded",
			investors: "KEy Investors",
			founder: "Founder",
			pricing: "Pricing",
			features: "Features",
			caseStudy: "customer case study",
			info: "Company Info",
			website: "Company Website"
		}
	);
	const addRow = (name) =>{
const newRows = rows;
newRows.push(name);
console.log(newRows);
setRows(newRows);
	}
	const showMenu = () => {
		var menu = totalRows.map( name =>{
			if(rows.length > 0 && !rows.includes(name)){
			return(
				<Dropdown.Item key={name} onClick={() => addRow(name)} href={`#/${name}`}>{name}</Dropdown.Item>
			)
			}
		})
		return menu;
	};
const handleRemove = (id) =>{
	let vendorList = vendors;
	vendorList = vendorList.filter(element => element.id !== id);
	setVendors(vendorList)
}
const showRows = (vendor,type) =>{
var singleRow = rows.map(row =>{
	if(type === "details"){
return (

		<div key={row + vendor.id} className="vendor-div">
	<h4 className="vendor-div-subtitle mt-2">{vendor[row]}</h4>
	</div>

)
	}
	else{
		return (
			<div key={row + vendor.id} className="vendor-div">
			<div className = "d-flex webkit align-items-center">
		<h4 className="vendor-div-subtitle mt-2">{vendor[row]}</h4>
		<img src={cancel} className="cancel" onClick={() => handleCancel(row)} alt="cancel" width="15" height="15" />
		</div>
		</div>
		)
	}
	})
	return singleRow;
}
const getStrokeColor = (no) =>{
	if(no > 60){
		return "green";
	}
	else if(no === 60){
		return "#F7CA3D";
	}
	else{
		return "red";
	}
}
const getBackColor = (no) =>{
	if(no > 60){
		return "#E7F3E1";
	}
	else if(no === 60){
		return "#FDF3D4";
	}
	else{
		return "#F9DEDF";
	}
}
const showVendors =() =>{
const vendorsList = vendors.map(vendor =>{
return (
	<div key={vendor.id} className = "p-0 vendor-card">
	<div className="vendor-intro">
	<div className="vendor-intro-close mt-2">
	<img className="close" src={close} onClick={() => handleRemove(vendor.id)} width= "10" height = "10" alt="logo" />
	</div>
		<div className="vendor-intro-block">
	<img className="logo" src={logo}  width= "50" height = "50" alt="logo" />
	</div>
	<h4 className="vendor-title mt-2 mb-4">{vendor.title}</h4>
	</div>
	<div className="vendor-div">
	<Progress type="circle" strokeColor={getStrokeColor(vendor.score)} format={(percent) => percent/10} trailColor={getBackColor(vendor.score)} width={35} className="scoreBoard mt-2" percent={vendor.score} />
	</div>
	<div className="vendor-div">
	<h4 className="vendor-div-subtitle mt-2">{vendor.description}</h4>
	</div>
	<div className="vendor-div">
	<h4 className="vendor-div-subtitle mt-2">{vendor.funding}</h4>
	</div>
	{show && (
		<>
		<div className="vendor-div">
	<h4 className="vendor-div-subtitleSmall mt-2">{vendor.funded}</h4>
	</div>
	<div className="vendor-div">
	<h4 className="vendor-div-subtitleSmall mt-2">{vendor.investors}</h4>
	</div>
	<div className="vendor-div">
	<h4 className="vendor-div-subtitleSmall mt-2">{vendor.founder}</h4>
	</div>	
		</>
	)}
	{
	showRows(vendor, "details")
}
					</div>
)
})
return vendorsList;
}

const handleCancel = (name) => {
var newRows = rows;
newRows = newRows.filter(e => e !== name);
setRows(newRows);	
}

const addVendor =() =>{
	const addvendor = (
		<div key={newVendor.id} className = "p-0 vendor-card">
		<div className="vendor-intro">
		<div style={{visibility: "hidden"}} className="vendor-intro-close mt-2">
		<img className="close" src={close}  width= "10" height = "10" alt="logo" />
		</div>
			<div className="vendor-intro-block">
		<img className="logo add-logo" src={add}  width= "50" height = "50" alt="logo" />
		</div>
		<h4 className="vendor-title add-vendor mt-2 mb-4">{newVendor.title}</h4>
		</div>
		<div className="vendor-div">
		<h4 className="vendor-div-title mt-2">{newVendor.score}</h4>
		</div>
		<div className="vendor-div">
		<h4 className="vendor-div-subtitle mt-2">{newVendor.description}</h4>
		</div>
		<div className="vendor-div pointer" onClick={() => setShow(!show)}>
	
		<h4 className="vendor-div-subtitle arrow mt-2"><span className="arrowIcon">
			{show ? <img src={left}	width="10" height="10" alt="arrow" /> : <img src={right}	width="10" height="10" alt="arrow" /> }
			
			</span> {newVendor.funding}</h4>
		</div>
		{show && (
			<>
			<div className="vendor-div">
		<h4 className="vendor-div-subtitleSmall mt-2">{newVendor.funded}</h4>
		</div>
		<div className="vendor-div">
		<h4 className="vendor-div-subtitleSmall mt-2">{newVendor.investors}</h4>
		</div>
		<div className="vendor-div">
		<h4 className="vendor-div-subtitleSmall mt-2">{newVendor.founder}</h4>
		</div>	
			</>
		)}
		{showRows(newVendor, "addVendor")}
						</div>
	)
	return addvendor;
	}
	

    return (
        <div className = "container">
			<div className = "row m-0 p-3 criteria">
<div className = "col-md-12">
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Add Criteria
  </Dropdown.Toggle>

  <Dropdown.Menu>
{showMenu()}
{rows.length === totalRows.length && (
					<Dropdown.Item key="No options" href="#/nothing">No options</Dropdown.Item>
				)				
			}
  </Dropdown.Menu>
</Dropdown>
</div>
			</div>			
			<div className = "d-flex webkit noWrap">
				{addVendor()}
	            {showVendors()}
		
			</div>
		</div>



   
    );
  
}

export default Home;
