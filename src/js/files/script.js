// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.querySelectorAll('.form-group__quantity').forEach((wrapper) => {
	const minusButton = wrapper.querySelector('.quantity-minus');
	const plusButton = wrapper.querySelector('.quantity-plus');
	const counterElement = wrapper.querySelector('.counter');

	if (!minusButton || !plusButton || !counterElement) {
		return;
	}

	let counter = Number(counterElement.textContent.trim()) || 0;

	minusButton.addEventListener('click', (event) => {
		event.preventDefault();
		if (counter > 0) {
			counter--;
		}
		counterElement.textContent = counter >= 1 && counter < 10 ? "0" + counter : counter;
	});

	plusButton.addEventListener('click', (event) => {
		event.preventDefault();
		counter++;
		counterElement.textContent = counter < 10 ? "0" + counter : counter;
	});
});

// Progress Bar
document.querySelectorAll('.form-group__progressBar').forEach((wrapper) => {
	const sliderProps = {
		fill: "#0880AE", // line left color
		background: "#DBE2EA", // line right color
	};
	const slider = wrapper.querySelector(".range__slider");
	const sliderValue = wrapper.querySelector(".length__title");

	slider.querySelector("input").addEventListener("input", event => {
		sliderValue.setAttribute("data-length", event.target.value);
		applyFill(event.target);
	});
	applyFill(slider.querySelector("input"));
	function applyFill(slider) {
		const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
		const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
			0.1}%)`;
		slider.style.background = bg;
		sliderValue.setAttribute("data-length", slider.value);
	}
});

// Alert close
const closeAlert = document.getElementsByClassName("close-alert");
for (let i = 0; i < closeAlert.length; i++) {
	closeAlert[i].onclick = function(){
    let alert = this.parentElement;
    alert.style.opacity = "0";
    setTimeout(() => {
		alert.style.display = "none"; 
	}, 600);
  }
}

// Modal close
const closeModal = document.getElementsByClassName("close-modal");
for (let i = 0; i < closeModal.length; i++) {
	closeModal[i].onclick = function(){
    let modal = this.parentElement;
    modal.style.opacity = "0";
    setTimeout(() => {
		modal.style.display = "none"; 
	}, 600);
  }
}




// const ctx = document.getElementById('myChart');

// const stackedBar = new Chart(ctx, {
// 	type: 'bar',
// 	data: data,
// 	options: {
// 		 scales: {
// 			  x: {
// 					stacked: true
// 			  },
// 			  y: {
// 					stacked: true
// 			  }
// 		 }
// 	}
// });


// const config = {
// 	type: 'bar',
// 	data: data,
// 	options: {
// 		plugins: {
// 			legend: {
// 			  labels: {
// 				 boxWidth: 28,
// 				 boxHeight: 28,
// 			  },
// 			  position: 'bottom',
// 			},
// 		  title: {
// 			 font: {
// 				size: 34,
// 			 },
// 			 align: 'start',
// 			 display: true,
// 			 text: '443K Pageviews',
// 			 color: '#2C2738',
// 		  },
// 		},
// 	  responsive: true,
// 	  interaction: {
// 		 intersect: false,
// 	  },
// 	  scales: {
// 		 x: {
// 			stacked: true,
// 		 },
// 		 y: {
// 			stacked: true
// 		 }
// 	  }
// 	}
//  };


// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 40};

// const labels = Utils.months({count: 7});
// const data = {
//    //   labels: [
//    //    ['Mon'],
//    //    ['Tue'],
//    //    ['Wed'],
//    //    ['Thu'],
//    //    ['Fri'],
//    //    ['Sat'],
//    //    ['Unit'],
//    //  ],
//   datasets: [
//     {
//       label: 'Pageviews',
    
//       backgroundColor: '#D6CF6E',
  
//     },
//     {
//       label: 'Conversions',
      
//       backgroundColor: '#14A38B',
     
//     },
//   ]
// };

// const actions = [
// 	{
// 	  name: 'Randomize',
// 	  handler(chart) {
// 		 chart.data.datasets.forEach(dataset => {
// 			dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 40});
// 		 });
// 		 chart.update();
// 	  }
// 	},
//  ];

