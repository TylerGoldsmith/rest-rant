const React = require('react')

function Default(html) {
    return (
        <><html>
            <head>
                <title>RestRant</title>
                <link rel="stylesheet" href="/assets/main.css" />
            </head>
        </html><body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/newPlaces">New Places</a>
                        </li>
                    </ul>
                </nav>
            </body></>
    )
}