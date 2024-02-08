const darkButton = document.querySelector('#darkMode')
const main = document.querySelector('main')

darkButton.addEventListener('click', () =>{
    if (darkButton.textContent.includes('🌜')){
        main.style.background = 'rgb(0,0,0, 0.9)';
        main.style.color = '#fff';
        darkButton.textContent = '🔆';
    } else {
    		main.style.background = "#eee";
        	main.style.color = "#000";
        	darkButton.textContent = "🌜";
}
});


// modeButton.addEventListener("click", () => {
// 	if (modeButton.textContent.includes("🕶️")) {
// 		main.style.background = "#000";
// 		main.style.color = "#fff";
// 		modeButton.textContent = "🔆";
// 	} else {
// 		main.style.background = "#eee";
// 		main.style.color = "#000";
// 		modeButton.textContent = "🕶️";
// 	}
// });
