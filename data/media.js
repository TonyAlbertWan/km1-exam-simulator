(function () {
  window.KM1 = window.KM1 || {};

  window.KM1.media = {
    speedLimit: `
      <svg viewBox="0 0 360 210" role="img" aria-label="限速40标志">
        <rect width="360" height="210" fill="#d9edf7"/>
        <rect y="145" width="360" height="65" fill="#5a6671"/>
        <path d="M0 177 H360" stroke="#fff" stroke-width="10" stroke-dasharray="30 24"/>
        <circle cx="180" cy="82" r="58" fill="#fff" stroke="#d51d1d" stroke-width="13"/>
        <text x="180" y="102" text-anchor="middle" font-family="Arial" font-size="62" font-weight="700">40</text>
      </svg>`,
    crosswalk: `
      <svg viewBox="0 0 360 210" role="img" aria-label="人行横道场景">
        <rect width="360" height="210" fill="#b9d7ea"/>
        <rect y="82" width="360" height="128" fill="#606a73"/>
        <g fill="#fff">
          <rect x="72" y="94" width="28" height="104"/>
          <rect x="118" y="94" width="28" height="104"/>
          <rect x="164" y="94" width="28" height="104"/>
          <rect x="210" y="94" width="28" height="104"/>
          <rect x="256" y="94" width="28" height="104"/>
        </g>
        <circle cx="53" cy="58" r="16" fill="#1f66b2"/>
        <path d="M53 77 L40 117 M53 77 L68 117 M45 94 H66" stroke="#1f66b2" stroke-width="9" stroke-linecap="round"/>
      </svg>`,
    noEntry: `
      <svg viewBox="0 0 360 210" role="img" aria-label="禁止驶入标志">
        <rect width="360" height="210" fill="#eef3f8"/>
        <rect y="145" width="360" height="65" fill="#5d6770"/>
        <circle cx="180" cy="83" r="58" fill="#df2a2a"/>
        <rect x="128" y="69" width="104" height="28" rx="3" fill="#fff"/>
      </svg>`,
    school: `
      <svg viewBox="0 0 360 210" role="img" aria-label="注意儿童标志">
        <rect width="360" height="210" fill="#d7edf8"/>
        <polygon points="180,22 286,176 74,176" fill="#ffd64d" stroke="#1b1b1b" stroke-width="8"/>
        <circle cx="160" cy="82" r="13" fill="#1b1b1b"/>
        <circle cx="205" cy="75" r="12" fill="#1b1b1b"/>
        <path d="M160 99 L141 139 M160 99 L182 137 M203 91 L184 133 M203 91 L223 132 M151 112 H209" stroke="#1b1b1b" stroke-width="9" stroke-linecap="round"/>
      </svg>`,
    trafficLight: `
      <svg viewBox="0 0 360 210" role="img" aria-label="路口信号灯场景">
        <rect width="360" height="210" fill="#cbe3f4"/>
        <rect y="116" width="360" height="94" fill="#59636d"/>
        <rect x="165" y="116" width="30" height="94" fill="#45505a"/>
        <path d="M0 163 H360" stroke="#fff" stroke-width="8" stroke-dasharray="28 22"/>
        <rect x="254" y="22" width="34" height="86" rx="8" fill="#26313c"/>
        <circle cx="271" cy="43" r="11" fill="#b82020"/>
        <circle cx="271" cy="66" r="11" fill="#6b6f2b"/>
        <circle cx="271" cy="89" r="11" fill="#186f34"/>
        <rect x="268" y="108" width="6" height="62" fill="#26313c"/>
      </svg>`
  };
})();
