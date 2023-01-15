let toggle = document.querySelector('.toggle');
		let menu = document.querySelector('.menu');
        let mod = document.querySelector('.mod');
        let last = document.querySelector('.last')
		toggle.onclick =function(){
			menu.classList.toggle('active');
            mod.classList.add('active');
            last.classList.add('active');
		}