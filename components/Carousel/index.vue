<script setup>
    const data = reactive({
      slides: 5,
      active: 1,
    });
    
    const move = (amount) => {
      const newActive = ref();
      const newIndex = ref(data.active + amount);
      if (newIndex.value > data.slides) newActive.value = 1;
      if (newIndex.value === 0) newActive.value = data.slides;
      data.active = newActive.value || newIndex.value;
      console.log("move", newIndex.value);
    };
    const jump = (index) => {
      data.active = index;
    };
    const addSlide = () => {
      data.slides = data.slides++;
    };
    const removeSlide = () => {
      data.slides = data.slides--;
    };
    </script>
    
    <template>
      <div class="carousel">
        <div class="buttons">
          <button @click="removeSlide" :disabled="data.slides <= 2">
            Remove Slide
          </button>
          <button @click="addSlide" :disabled="data.slides >= 10">Add Slide</button>
        </div>
        <div class="slides bg-green-200">
          <div v-for="index in data.slides" :key="index" class="slide-container">
            <transition-group name="slidee" mode="out-in">
              <div
                v-if="index == data.active"
                class="slide-item"
                style="background-image: url('/img/naruto.jpg')"
              >
                Slide {{ index }}
              </div>
            </transition-group>
          </div>
        </div>
        <span class="prev" @click="move(-1)">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          >
            <path
              d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"
            />
          </svg>
        </span>
        <span class="next" @click="move(1)">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          >
            <path
              d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
            />
          </svg>
        </span>
        <ul class="dots">
          <li
            v-for="(dot, index) in data.slides"
            :key="index"
            :class="{ active: ++index === data.active }"
            @click="jump(index)"
          ></li>
        </ul>
      </div>
    </template>
    
    <style scoped>
    .carousel {
      position: relative;
      height: 60vh;
    }
    .prev,
    .next {
      position: absolute;
      top: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #221e21;
      color: #221e21;
      border-radius: 50%;
      margin-top: -25px;
      margin-left: 25px;
      cursor: pointer;
      line-height: 48px;
      text-align: center;
      text-indent: -2px;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .prev:hover,
    .next:hover {
      background: #221e21;
      color: #fff;
      transform: scale(1.2);
    }
    .prev:active,
    .next:active {
      transform: translate(0, 3px) scale(1.2);
    }
    
    .next {
      right: 0;
      margin-left: auto;
      margin-right: 25px;
      text-indent: 2px;
    }
    .slide-container {
      /* width: 100vh; */
      width: 100%;
    }
    .slide-item {
      width: 100%;
      height: 100%;
    }
    
    .dots {
      position: absolute;
      display: block;
      width: 100%;
      text-align: center;
      bottom: 20px;
    }
    .dots li {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: #221e21;
      opacity: 0.2;
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
      transition: opacity 0.4s ease-in-out,
        width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .dots li.active {
      width: 22px;
      opacity: 1;
    }
    /* .slidee-enter-active,
    .slidee-leave-active {
      transition: 0.3s ease all;
    }
    .slidee-enter-from,
    .slidee-leave-to {
      transform: scale(0);
      transform-origin: top;
    } */
    
    .slidee-enter-from {
      opacity: 0;
      /* transform: translate(-40%, -50%); */
    }
    .slidee-enter-active {
      transition-delay: 150ms;
      /* transition: all 400ms; */
      /* position: absolute; */
      /* transform: translate(-50%, -50%); */
    }
    .slidee-leave-from {
      opacity: 1;
    }
    .slidee-leave-active {
      opacity: 0;
      /* transform: translate(-60%, -50%); */
      /* transition: all 400ms; */
      /* position: absolute; */
      /* transform: translate(-50%, -50%); */
    }
    
    .slides {
      font-size: 40px;
      display: flex;
      height: 100%;
      /* align-items: center; */
      /* justify-content: center; */
      font-weight: bold;
    }
    @media (min-width: 600px) {
      .slides {
        font-size: 80px;
      }
    }
    @media (min-width: 900px) {
      .slides {
        font-size: 140px;
      }
    }
    .slides .animated {
      transition: all 400ms;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .slides .slide-in {
      opacity: 0;
      transform: translate(-40%, -50%);
    }
    .slides .slide-in-active {
      transition-delay: 150ms;
    }
    .slides .slide-out {
      opacity: 1;
    }
    .slides .slide-out-active {
      opacity: 0;
      transform: translate(-60%, -50%);
    }
    
    .buttons {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    
    button {
      padding: 10px;
      outline: none;
      border: none;
      -webkit-appearance: none;
      background: #221e21;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.2;
      cursor: no-drop;
    }
    </style>
    