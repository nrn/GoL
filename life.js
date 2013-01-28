// Conway's Game of Life

module.exports = update

function update (alive) {
  return build(alive.reduce(findNeighbors, {}))
}

function findNeighbors (neighbors, cell) {
  var xs = [ cell.x - 1, cell.x, cell.x + 1 ]
    , ys = [ cell.y - 1, cell.y, cell.y + 1 ]

  xs.forEach( function (x) {
    ys.forEach( function (y) {
      if (x === cell.x && y === cell.y) {
        add(x+','+y, 0).live = true
      } else add(x+','+y, 1)
    })
  })

  function add (loc, num) {
    if (neighbors[loc]) neighbors[loc].value += num
    else neighbors[loc] = { value: num }
    return neighbors[loc]
  }

  return neighbors
}

function build (neighbors) {
  return Object.keys(neighbors).map(function (loc) {
    var xy = loc.split(',')
      , x = +xy[0]
      , y = +xy[1]
      , val = neighbors[loc]

    if (val.value === 3) return { x: x, y: y }
    if (val.value === 2 && val.live) return { x: x, y: y }
    return null
  }).filter(Boolean)
}

