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

  t.plan(2)
  t.deepEqual(life(gen1), gen2, 'First update')
  t.deepEqual(life(gen2), gen1, 'Second update')
})