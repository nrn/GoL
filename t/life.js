var test = require('tape')
  , life = require('../life.js')

test('Game of life', function (t) {
  var gen1 =
    [ { x: 5, y: 4 }
    , { x: 5, y: 5 }
    , { x: 5, y: 6 }
    ]
  var gen2 =
    [ { x: 4, y: 5 }
    , { x: 5, y: 5 }
    , { x: 6, y: 5 }
    ]
  var block =
    [ { x: -1, y: -1 }
    , { x: -1, y: 0 }
    , { x: 0, y: -1 }
    , { x: 0, y: 0 }
    ]

  t.same(life(gen1), gen2, 'First update')
  t.same(life(gen2), gen1, 'Second update')
  t.same(life(block), block, 'Stable')
  t.equal(life.findNeighbors({}, { x: 5, y: 5})['6,6'].value, 1, 'findNeighbors.')
  t.equal(life.add('a', 1, {}).value, 1, 'Add')
  t.same(life.build({'1,1': { value: 3 }})[0], { x: 1, y: 1 }, 'Build')
  t.end()
})
