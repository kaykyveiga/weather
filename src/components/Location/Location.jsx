import "./Location.css"

function Location() {
    const currentDate = new Date()
    const monthNumber = currentDate.getMonth()
    let monthName;

    switch (monthNumber) {
        case 0: monthName = "Janeiro"; break;
        case 1: monthName = "Fevereiro"; break;
        case 2: monthName = "Março"; break;
        case 3: monthName = "Abril"; break;
        case 4: monthName = "Maio"; break;
        case 5: monthName = "Junho"; break;
        case 6: monthName = "Julho"; break;
        case 7: monthName = "Agosto"; break;
        case 8: monthName = "Setembro"; break;
        case 9: monthName = "Outubro"; break;
        case 10: monthName = "Novembro"; break;
        case 11: monthName = "Dezembro"; break;
        default: monthName = "Mês inválido"; break;
    }

    const day = currentDate.getDate();

    return (
        <div>
            <p id="day">Hoje, {day} {monthName}</p>
        </div>
    )
}

export default Location
