const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text-plain')
    res.write("Hello")
    res.end()

});

const PORT = 8080

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))