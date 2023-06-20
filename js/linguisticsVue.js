var app = new Vue({
	el: '#app',
	data(){
		return {
			language_names: ["English", "Deutsch", "Français", "Русский", "Español", "Polski", "𐌲𐌿𐍄𐌰𐌽𐌴", "словѣньскъ", "संस्कृत", "Latina", "Nederlands", "Ἑλληνική", "հայերէն", "עברית", "Svenska", "Čeština"],
			language_names_english: ["English", "German", "French", "Russian", "Spanish", "Polish", "Gothic", "Old Church Slavic", "Sanskrit", "Latin", "Dutch", "Ancient Greek", "Classical Armenian", "Biblical Hebrew", "Swedish", "Czech"]
		}
	},
	methods: {
		showEnglish(index) {
			let langNameNode = document.getElementById(`row${index}`).firstElementChild;
			langNameNode.innerHTML = this.language_names_english[index];
		},
		showOther(index) {
			let langNameNode = document.getElementById(`row${index}`).firstElementChild;
			langNameNode.innerHTML = this.language_names[index];
		}
	}
})