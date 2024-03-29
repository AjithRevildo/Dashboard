import React from 'react';
import { Card } from 'react-bootstrap';

export function Paragraph() {
    return (
        <div className="Paragraph">
            <Card border="light">
                <Card.Header><h4>Development Approach</h4></Card.Header>
                <Card.Body>

                    <Card.Text>
                    SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                  <br />
                  <br />
                        Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    );
}
