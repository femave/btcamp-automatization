** Architecture:           
    *** Option 1:
    server
        app.js
        routes
            index.js (all routes here)
            handlers (with all that have all logic)

    *** Option 2:
    server
        app.js (all routes here)
        routes
            get-titles
                index.js (specific route)
                handlers
                    info.js (all logic here)