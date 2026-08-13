// ==========================================
// THE QUEST ENGINE (Data & Notes Vault)
// ==========================================

const questDatabase = {
    "Science-Physics-LightReflectionRefraction": [
        { q: "What is the speed of light in a vacuum?", opts: ["3 x 10^8 m/s", "3 x 10^5 km/s", "Both A and B", "None of these"], ans: 2, exp: "3 x 10^8 m/s is exactly 300,000,000 m/s. When converted to kilometers, it becomes 300,000 km/s (or 3 x 10^5 km/s). Both units represent the exact same speed!" },
        { q: "The mirror used by dentists to examine teeth is:", opts: ["Convex", "Concave", "Plane", "Cylindrical"], ans: 1, exp: "Dentists use Concave mirrors because when an object (the tooth) is placed close to it, it produces a magnified, erect, and virtual image." },
        { q: "If the magnification produced by a lens is -1, the image is:", opts: ["Real and inverted", "Virtual and erect", "Real and magnified", "Virtual and diminished"], ans: 0, exp: "The negative (-) sign indicates that the image is formed below the principal axis, meaning it is real and inverted. The '1' means it is the exact same size as the object." },
        { q: "According to Snell's law, the ratio of sin(i) to sin(r) is a constant called:", opts: ["Refractive index", "Optical density", "Focal length", "Magnification"], ans: 0, exp: "Snell's Law specifically states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant, mathematically defined as the Refractive Index." },
        { q: "A convex lens is also known as a:", opts: ["Diverging lens", "Converging lens", "Plane lens", "Bifocal lens"], ans: 1, exp: "A convex lens is thicker at the center and converges parallel rays of light to a single point (the principal focus), which is why it is called a converging lens." },
        { q: "The power of a lens is defined as the reciprocal of its:", opts: ["Radius of curvature", "Focal length in meters", "Magnification", "Object distance"], ans: 1, exp: "Power (P) = 1 / f. However, to calculate the power in Dioptres (D), the focal length (f) MUST be measured in meters." },
        { q: "Where should an object be placed in front of a convex lens to get a real image of the size of the object?", opts: ["At the principal focus", "At twice the focal length (2F)", "At infinity", "Between optical center and focus"], ans: 1, exp: "When an object is placed exactly at 2F1, the convex lens forms a real, inverted image at 2F2 on the opposite side, which is identical in size to the object." },
        { q: "The absolute refractive index of any medium is always:", opts: ["Less than 1", "Equal to 1", "Greater than 1", "Zero"], ans: 2, exp: "Absolute refractive index = (Speed of light in vacuum) / (Speed of light in medium). Since nothing travels faster than light in a vacuum, the numerator is always larger, making the answer always > 1." }
    ]
};

const secretNotesVault = {
    "Science-Physics-LightReflectionRefraction": `
        <div class="n-title">LIGHT: Reflection & Refraction</div>
        <div class="n-section">
            <div class="n-h3">1. Laws of Reflection</div>
            <p>• The angle of incidence is equal to the angle of reflection <span class="n-hl">∠i = ∠r</span>.</p>
            <p>• The incident ray, normal, and reflected ray all lie in the same plane.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Spherical Mirrors</div>
            <p>• <span class="n-hl">Concave Mirror:</span> Converging mirror. Used in torches, dentist mirrors, solar furnaces.</p>
            <p>• <span class="n-hl">Convex Mirror:</span> Diverging mirror. Always forms virtual, erect, and diminished images. Used as rear-view mirrors in cars.</p>
            <div class="n-formula">Mirror Formula: 1/v + 1/u = 1/f</div>
        </div>
        <div class="n-section">
            <div class="n-h3">3. Refraction & Lenses</div>
            <p>• Bending of light when passing from one medium to another due to a change in speed.</p>
            <p>• <span class="n-hl">Snell's Law:</span> sin(i) / sin(r) = constant (Refractive Index).</p>
            <div class="n-formula">Lens Formula: 1/v - 1/u = 1/f</div>
            <div class="n-formula">Power of Lens (P) = 1 / f (in meters). Unit: Dioptre (D)</div>
        </div>
    `
};
