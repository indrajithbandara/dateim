let date = document.querySelector("#date")
let dateSet = document.querySelector("#dateSet")

var dateim = new Dateim()

dateim
	.date('31/12/2017')
	.format('mm-dd-yyyy')
	.when({
		evt: 'click',
		sel: dateSet,
		method: function() {
			date.innerText = dateim.parsed
		}
	})
	.settings({
		lang: {
			month: [
				'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs',
				'Haziran', 'Temmuz', 'Ağustos', 'Eylül',
				'Ekim', 'Kasım', 'Aralık'
			]
		}
	})
	.run()
