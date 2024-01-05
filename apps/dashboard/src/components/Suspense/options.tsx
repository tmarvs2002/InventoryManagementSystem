const Plane = () => (
    <div className="sk-plane"></div>
)

const Chase = () => (
    <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </div>
)

const Bounce = () => (
    <div className="sk-bounce">
        <div className="sk-bounce-dot"></div>
        <div className="sk-bounce-dot"></div>
    </div>
)

const Wave = () => (
    <div className="sk-wave">
        <div className="sk-wave-rect"></div>
        <div className="sk-wave-rect"></div>
        <div className="sk-wave-rect"></div>
        <div className="sk-wave-rect"></div>
        <div className="sk-wave-rect"></div>
    </div>
)

const Pulse = () => (
    <div className="sk-pulse"></div>
)

const Flow = () => (
    <div className="sk-flow">
        <div className="sk-flow-dot"></div>
        <div className="sk-flow-dot"></div>
        <div className="sk-flow-dot"></div>
    </div>
)

const Swing = () => (
    <div className="sk-swing">
        <div className="sk-swing-dot"></div>
        <div className="sk-swing-dot"></div>
    </div>
)

const Circle = () => (
    <div className="sk-circle">
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
        <div className="sk-circle-dot"></div>
    </div>
)

const CircleFade = () => (
    <div className="sk-circle-fade">
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
    </div>
)

const Grid = () => (
    <div className="sk-grid">
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
    </div>
)

const Fold = () => (
    <div className="sk-fold">
        <div className="sk-fold-cube"></div>
        <div className="sk-fold-cube"></div>
        <div className="sk-fold-cube"></div>
        <div className="sk-fold-cube"></div>
    </div>
)

const Wander = () => (
    <div className="sk-wander">
        <div className="sk-wander-cube"></div>
        <div className="sk-wander-cube"></div>
        <div className="sk-wander-cube"></div>
    </div>
)

export type optionsList = 'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle_fade' | 'grid' | 'fold' | 'wander';

const options = {
    'plane': Plane,
    'chase': Chase,
    'bounce': Bounce,
    'wave': Wave,
    'pulse': Pulse,
    'flow': Flow,
    'swing': Swing,
    'circle': Circle,
    'circle_fade': CircleFade,
    'grid': Grid,
    'fold': Fold,
    'wander': Wander,
}

export default options