import React, { useState } from "react";

const TrafficLight = () => {
    // Estado para el color actual
    const [color, setColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    // Función para cambiar el color cuando se hace clic en una luz
    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    // Función para cambiar el color automáticamente
    const cycleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    // Función para añadir el color púrpura al semáforo
    const addPurple = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div className="traffic-light-container">
            <div className="traffic-light">
                {colors.map((lightColor, index) => (
                    <div
                        key={index}
                        className={`light ${lightColor} ${color === lightColor ? "active" : ""}`}
                        onClick={() => handleClick(lightColor)}
                    ></div>
                ))}
            </div>
            <button className="btn" onClick={cycleColor}>Cambiar Color</button>
            <button className="btn" onClick={addPurple}>Añadir Púrpura</button>
        </div>
    );
};

export default TrafficLight;
