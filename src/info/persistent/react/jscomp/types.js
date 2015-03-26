/**
 * @fileoverview Type annotations for the React library.
 *
 * Will be automatically included as a source (not externs) file by
 * ReactCompilerPass. The contents of this file should be inert (i.e. interfaces
 * and typedefs only) such that it compiles down to nothing.
 *
 * Based on https://github.com/facebook/flow/blob/master/lib/react.js
 */

/**
 * @typedef {!Function}
 * @template T
 */
var ReactClass;

/**
 * @interface
 * @template T
 */
function ReactElement() {}

/**
 * @interface
 */
function ReactComponent() {}

/**
 * @type {(!Object|{children: (Object|undefined)})}
 * @const
 */
ReactComponent.prototype.props;

/**
 * @type {Object}
 */
ReactComponent.prototype.state;

/**
 * @dict
 */
ReactComponent.prototype.refs;

/**
 * @return {Object}
 */
ReactComponent.prototype.getInitialState = function() {};

/**
 * @param {Object} props
 * @param {function(): void=} callback
 * @return {void}
 */
ReactComponent.prototype.setProps = function(props, callback) {};

/**
 * @param {Object} props
 * @param {function(): void=} callback
 * @return {void}
 */
ReactComponent.prototype.replaceProps = function(props, callback) {};

/**
 * @param {Object} state
 * @param {function(): void=} callback
 * @return {void}
 */
ReactComponent.prototype.setState = function(state, callback) {};

/**
 * @param {Object} state
 * @param {function(): void=} callback
 * @return {void}
 */
ReactComponent.prototype.replaceState = function(state, callback) {};

/**
 * @return {ReactElement}
 */
ReactComponent.prototype.render = function(state, callback) {};

/**
 * @param {function(): void=} callback
 * @return {void}
 */
ReactComponent.prototype.forceUpdate = function(callback) {};

/**
 * @return {Element}
 */
ReactComponent.prototype.getDOMNode = function() {};

/**
 * @return {boolean}
 */
ReactComponent.prototype.isMounted = function() {};

// Component lifecycle/delegate methods that may be implemented. Intentionally
// does not include the context parameter that is passed to some methods, since
// it's undocumented. Implementations can still add it (and it will not be
// flagged as an error).

/**
 * @return {void}
 */
ReactComponent.prototype.componentWillMount = function() {};

/**
 * @return {void}
 */
ReactComponent.prototype.componentDidMount = function() {};

/**
 * @param {Object} nextProps
 * @return {void}
 */
ReactComponent.prototype.componentWillReceiveProps = function(nextProps) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {boolean}
 */
ReactComponent.prototype.shouldComponentUpdate = function(nextProps, nextState) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {void}
 */
ReactComponent.prototype.componentWillUpdate = function(nextProps, nextState) {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @return {void}
 */
ReactComponent.prototype.componentDidUpdate = function(prevProps, prevState) {};

/**
 * @return {void}
 */
ReactComponent.prototype.componentWillUnmount = function() {};

/**
 * @typedef {boolean|number|string|ReactElement}
 */
var ReactChild;

/**
 * @typedef {
 *   ReactChild|
 *   Array.<boolean>|Array.<number>|Array.<string>|Array.<ReactElement>
 * }
 */
var ReactChildrenArgument;

/**
 * @interface
 */
function ReactChildren() {};

/**
 * @param {(Object|undefined)} children
 * @param {function(*, number)} func
 * @param {*=} context
 * @return {(Object|undefined)}
 */
ReactChildren.prototype.map = function(children, func, context) {};

/**
 * @param {(Object|undefined)} children
 * @param {function(*, number)} func
 * @param {*=} context
 */
ReactChildren.prototype.forEach = function(children, func, context) {};

/**
 * @param {(Object|undefined)} children
 * @return {number}
 */
ReactChildren.prototype.count = function(children) {};

/**
 * @param {(Object|undefined)} children
 * @return {ReactChild}
 */
ReactChildren.prototype.only = function(children) {};

/**
 * Parameters are: props, propName, componentName, location.
 * @typedef {function(Object, string, string, string): Error}
 */
var ReactPropsChainableTypeChecker = function() {};

/**
 * @interface
 */
function ReactPropTypes() {};
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.array;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.array.isRequired;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.bool;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.bool.isRequired;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.func;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.func.isRequired;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.number;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.number.isRequired;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.object;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.object.isRequired;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.string;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.string.isRequired;

/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.any;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.any.isRequired;
/**
 * @param {ReactPropsChainableTypeChecker} typeChecker
 * @return {ReactPropsChainableTypeChecker}
 */
ReactPropTypes.prototype.arrayOf = function(typeChecker) {};
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.element;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.element.isRequired;
/**
 * @param {Function} expectedClass
 * @return {ReactPropsChainableTypeChecker}
 */
ReactPropTypes.prototype.instanceOf = function(expectedClass) {};
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.node;
/** @type {ReactPropsChainableTypeChecker} */ ReactPropTypes.prototype.node.isRequired;
/**
 * @param {ReactPropsChainableTypeChecker} typeChecker
 * @return {ReactPropsChainableTypeChecker}
 */
ReactPropTypes.prototype.objectOf = function(typeChecker) {};
/**
 * @param {Array} expectedValues
 * @return {ReactPropsChainableTypeChecker}
 */
ReactPropTypes.prototype.oneOf = function(expectedValues) {};
/**
 * @param {Array.<ReactPropsChainableTypeChecker>} arrayOfTypeCheckers
 * @return {ReactPropsChainableTypeChecker}
 */
ReactPropTypes.prototype.oneOfType = function(arrayOfTypeCheckers) {};
/**
 * @param {Object.<ReactPropsChainableTypeChecker>} shapeTypes
 * @return {ReactPropsChainableTypeChecker}
 */
ReactPropTypes.prototype.shape = function(shapeTypes) {};

/**
 * @interface
 */
function ReactModule() {}

/**
 * @type {ReactChildren}
 * @const
 */
ReactModule.prototype.Children;

/**
 * @typedef {ReactComponent}
 */
ReactModule.prototype.Component;

/**
 * @type {ReactPropTypes}
 * @const
 */
ReactModule.prototype.PropTypes;

/**
 * @param {boolean} shouldUseTouch
 * @return {void}
 */
ReactModule.prototype.initializeTouchEvents = function(shouldUseTouch) {};

/**
 * @param {{render: function(): ReactElement}} specification
 * @return {ReactClass}
 */
ReactModule.prototype.createClass = function(specification) {};

/**
 * @param {T} mixin
 * @return {T}
 * @template T
 */
ReactModule.prototype.createMixin = function(mixin) {};

/**
 * @param {(ReactClass.<T>|string|number)} type
 * @param {Object=} props
 * @param {...ReactChildrenArgument} children
 * @return {ReactElement.<T>}
 * @template T
 */
ReactModule.prototype.createElement = function(type, props, children) {};

/**
 * @param {ReactElement.<T>} element
 * @param {Object=} props
 * @param {...ReactChildrenArgument} children
 * @return {ReactElement.<T>}
 * @template T
 */
ReactModule.prototype.cloneElement = function(element, props, children) {};

/**
 * @param {(ReactClass.<T>|string|number)} type
 * @return {function(Object=, ...ReactChildrenArgument): ReactElement.<T>}
 * @template T
 */
ReactModule.prototype.createFactory = function(type) {};

/**
 * @param {(ReactElement|Element)} componentOrElement
 * @return {Element}
 */
ReactModule.prototype.findDOMNode = function(componentOrElement) {};

/**
 * @param {ReactElement.<T>} element
 * @param {Element} container
 * @param {function()=} callback
 * @return {T}
 * @template T
 */
ReactModule.prototype.render = function(element, container, callback) {};

/**
 * @param {ReactElement} element
 * @return {string}
 */
ReactModule.prototype.renderToString = function(element) {};

/**
 * @param {ReactElement} element
 * @return {string}
 */
ReactModule.prototype.renderToStaticMarkup = function(element) {};

/**
 * @param {Element} container
 * @return {boolean}
 */
ReactModule.prototype.unmountComponentAtNode = function(container) {};

/**
 * @param {Object} element
 * @return {boolean}
 */
ReactModule.prototype.isValidElement = function(element) {};
