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

  t.plan(5)
  t.deepEqual(life(gen1), gen2, 'First update')
  t.deepEqual(life(gen2), gen1, 'Second update')
  t.equal(life.findNeighbors({}, { x: 5, y: 5})['6,6'].value, 1, 'findNeighbors.')
  t.equal(life.add('a', 1, {}).value, 1, 'Add')
  t.deepEqual(life.build({'1,1': { value: 3 }})[0], { x: 1, y: 1 }, 'Build')
})
