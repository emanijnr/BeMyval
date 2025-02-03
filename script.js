
    <script>
        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");
        const response = document.getElementById("response");
        
        yesBtn.addEventListener("click", () => {
            document.querySelector(".question").classList.add("hidden");
            document.querySelector(".buttons").classList.add("hidden");
            response.classList.remove("hidden");
        });
        
        noBtn.addEventListener("mouseover", () => {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    </script>
</body>
</html>