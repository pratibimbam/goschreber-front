import React, {useState} from 'react';
import {Card, Button} from "react-bootstrap";
import { GeoAltFill, Envelope, Globe2 } from 'react-bootstrap-icons';





function KgvItem({favouritedItems, verein, favClick}) {

  const [merken, setMerken] = useState(false)  
  const web = verein.web

  const heart = favouritedItems.filter((el) => el._id === verein._id)

    return (
        <Card border="success" className="mb-1" >
            <Card.Body >
                <div>{favouritedItems.}</div>
                <Card.Title>{verein.kgvname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><GeoAltFill className="mr-2"color="green" size={17}/>{verein.adresse.strasse}, {verein.adresse.plz} {verein.adresse.stadt}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><Envelope className="mr-2" color="green" size={17}/>{verein.email}</Card.Subtitle>
                {web && <Card.Subtitle href={verein.web} className="mb-3 text-muted"><Globe2 className="mr-2" color="green" size={17} /><a className="mb-3 text-muted" href={verein.web}>{verein.web}</a></Card.Subtitle>}
                <Button onClick={favClick} size="sm" className="mb-1" variant="outline-danger">Merken</Button>
            </Card.Body>
        </Card>
    )
}

export default KgvItem
