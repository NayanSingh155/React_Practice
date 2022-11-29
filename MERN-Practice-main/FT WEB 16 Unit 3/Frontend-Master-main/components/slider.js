const slider = () => {
  return `<div class="s-top">
    <p>What They're Saying About Us (@FrontendMasters)</p>
  </div>
  <div class="s-bottom">
    <div class="left-btn">
      <button id="prev"><i class="fas fa-angle-left"></i></button>
    </div>
    <div class="slider">
      <div class="slides"></div>
    </div>
    <div class="right-btn">
      <button id="next"><i class="fas fa-angle-right"></i></button>
    </div>
  </div>`;
};

export { slider };
