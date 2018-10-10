var componentRequireContext = require.context('components/shared', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
