// ==========================================
// SCIENCE VAULT (Complete Class 10 Syllabus)
// ==========================================

Object.assign(questDatabase, {
    // ------------------------------------------
    // PHYSICS
    // ------------------------------------------
    "Science-Physics-LightReflectionRefraction": [
        { q: "What is the speed of light in a vacuum?", opts: ["3 x 10^8 m/s", "3 x 10^5 km/s", "Both A and B", "None of these"], ans: 2, exp: "3 x 10^8 m/s is exactly 300,000,000 m/s. When converted to kilometers, it becomes 300,000 km/s (or 3 x 10^5 km/s). Both units represent the exact same speed!" },
        { q: "The mirror used by dentists to examine teeth is:", opts: ["Convex", "Concave", "Plane", "Cylindrical"], ans: 1, exp: "Dentists use Concave mirrors because when an object (the tooth) is placed close to it, it produces a magnified, erect, and virtual image." },
        { q: "If the magnification produced by a lens is -1, the image is:", opts: ["Real and inverted", "Virtual and erect", "Real and magnified", "Virtual and diminished"], ans: 0, exp: "The negative (-) sign indicates that the image is formed below the principal axis, meaning it is real and inverted. The '1' means it is the exact same size as the object." },
        { q: "According to Snell's law, the ratio of sin(i) to sin(r) is a constant called:", opts: ["Refractive index", "Optical density", "Focal length", "Magnification"], ans: 0, exp: "Snell's Law specifically states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant, mathematically defined as the Refractive Index." },
        { q: "A convex lens is also known as a:", opts: ["Diverging lens", "Converging lens", "Plane lens", "Bifocal lens"], ans: 1, exp: "A convex lens is thicker at the center and converges parallel rays of light to a single point (the principal focus), which is why it is called a converging lens." },
        { q: "The power of a lens is defined as the reciprocal of its:", opts: ["Radius of curvature", "Focal length in meters", "Magnification", "Object distance"], ans: 1, exp: "Power (P) = 1 / f. However, to calculate the power in Dioptres (D), the focal length (f) MUST be measured in meters." },
        { q: "Where should an object be placed in front of a convex lens to get a real image of the size of the object?", opts: ["At the principal focus", "At twice the focal length (2F)", "At infinity", "Between optical center and focus"], ans: 1, exp: "When an object is placed exactly at 2F1, the convex lens forms a real, inverted image at 2F2 on the opposite side, which is identical in size to the object." },
        { q: "The absolute refractive index of any medium is always:", opts: ["Less than 1", "Equal to 1", "Greater than 1", "Zero"], ans: 2, exp: "Absolute refractive index = (Speed of light in vacuum) / (Speed of light in medium). Since nothing travels faster than light in a vacuum, the numerator is always larger, making the answer always > 1." }
    ],
    
    "Science-Physics-TheHumanEye": [
        { q: "The human eye forms the image of an object at its:", opts: ["Cornea", "Iris", "Pupil", "Retina"], ans: 3, exp: "The retina acts as a light-sensitive screen at the back of the eye where the real, inverted image is formed." },
        { q: "The defect of vision in which a person cannot see distant objects clearly is:", opts: ["Hypermetropia", "Presbyopia", "Myopia", "Cataract"], ans: 2, exp: "Myopia (near-sightedness) occurs when the image of a distant object is formed in front of the retina. It is corrected using a concave lens." },
        { q: "Twinkling of stars is due to:", opts: ["Dispersion of light", "Atmospheric refraction", "Internal reflection", "Scattering of light"], ans: 1, exp: "As starlight enters the earth's atmosphere, it undergoes continuous refraction due to changing optical densities, causing the star to appear to twinkle." },
        { q: "The colored part of the eye that controls the size of the pupil is the:", opts: ["Cornea", "Retina", "Iris", "Optic nerve"], ans: 2, exp: "The iris acts like a camera shutter, adjusting the pupil's size to control how much light enters the eye." },
        { q: "Which color of white light bends the least when passed through a glass prism?", opts: ["Violet", "Blue", "Yellow", "Red"], ans: 3, exp: "Red light has the longest wavelength in the visible spectrum, so it travels fastest through the prism and bends the least." },
        { q: "Hypermetropia is corrected by using a:", opts: ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"], ans: 1, exp: "Hypermetropia (far-sightedness) is corrected with a converging (convex) lens to bring the focal point forward onto the retina." },
        { q: "The splitting of white light into its component colors is called:", opts: ["Refraction", "Reflection", "Dispersion", "Scattering"], ans: 2, exp: "Dispersion is the phenomenon of white light splitting into the 7 colors of the spectrum (VIBGYOR)." },
        { q: "The blue color of the sky is primarily due to:", opts: ["Dispersion", "Interference", "Refraction", "Scattering"], ans: 3, exp: "Fine particles in the atmosphere scatter shorter wavelengths (blue) more effectively than longer wavelengths (red)." }
    ],

    "Science-Physics-Electricity": [
        { q: "The SI unit of electrical resistivity is:", opts: ["Ohm (Ω)", "Ohm-meter (Ωm)", "Ampere (A)", "Volt (V)"], ans: 1, exp: "Resistivity (ρ) = (R × A) / L. The unit is Ohm × meter² / meter, which simplifies to Ohm-meter (Ωm)." },
        { q: "If two resistors of 10 Ω and 20 Ω are connected in parallel, the equivalent resistance is:", opts: ["30 Ω", "15 Ω", "6.67 Ω", "200 Ω"], ans: 2, exp: "1/R = 1/10 + 1/20 = 3/20. Therefore, R = 20/3 = 6.67 Ω." },
        { q: "According to Ohm's Law, at a constant temperature, V is directly proportional to:", opts: ["R", "I", "Time", "Power"], ans: 1, exp: "Ohm's Law states that the potential difference (V) is directly proportional to the current (I), giving V = IR." },
        { q: "Commercial unit of electrical energy is:", opts: ["Joule", "Watt", "Kilowatt-hour", "Volt-ampere"], ans: 2, exp: "1 Kilowatt-hour (kWh) equals 3.6 × 10^6 Joules, and is commonly known as 1 'unit' on an electricity bill." },
        { q: "The device used for measuring electric current is:", opts: ["Voltmeter", "Galvanometer", "Ammeter", "Potentiometer"], ans: 2, exp: "An ammeter measures electric current and is always connected in series in a circuit." },
        { q: "Heating effect of electric current is given by Joule's law, which states H equals:", opts: ["I²RT", "IR²T", "V²RT", "IRT"], ans: 0, exp: "Heat produced is directly proportional to the square of current (I²), resistance (R), and time (T)." },
        { q: "If the length of a wire is doubled and its cross-sectional area is halved, its resistance will become:", opts: ["Half", "Double", "Four times", "One-fourth"], ans: 2, exp: "R = ρ(L/A). New R = ρ(2L / (A/2)) = ρ(4L/A) = 4R. The resistance becomes four times greater." },
        { q: "Power (P) can be expressed mathematically as:", opts: ["V/I", "I²R", "V²R", "I/V"], ans: 1, exp: "P = VI. Substituting V = IR into the formula gives P = I(IR) = I²R." }
    ],

    "Science-Physics-MagneticEffectsofCurrent": [
        { q: "Magnetic field lines outside a bar magnet point from:", opts: ["North to South", "South to North", "East to West", "West to East"], ans: 0, exp: "By convention, magnetic field lines emerge from the North pole and merge at the South pole outside the magnet." },
        { q: "The rule used to find the direction of magnetic field around a straight current-carrying conductor is:", opts: ["Fleming's Left Hand Rule", "Fleming's Right Hand Rule", "Right Hand Thumb Rule", "Lenz's Law"], ans: 2, exp: "Point your right thumb in the direction of the current, and your wrapping fingers show the direction of the magnetic field lines." },
        { q: "A coil of many circular turns of insulated copper wire wrapped in a cylinder shape is a:", opts: ["Resistor", "Galvanometer", "Solenoid", "Generator"], ans: 2, exp: "A solenoid carrying current behaves exactly like a bar magnet, producing a strong, uniform magnetic field inside it." },
        { q: "The frequency of Alternating Current (AC) in India is:", opts: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"], ans: 0, exp: "In India, AC reverses its direction 100 times per second, which means its frequency is 50 cycles per second (50 Hz)." },
        { q: "Fleming's Left-Hand Rule is used to find the direction of:", opts: ["Magnetic field", "Induced current", "Force on a conductor", "Electric current"], ans: 2, exp: "FBI: Thumb = Force, Forefinger = Magnetic Field (B), Middle finger = Current (I)." },
        { q: "The magnetic field inside a long straight solenoid carrying current is:", opts: ["Zero", "Decreases as we move to ends", "Increases as we move to ends", "Same at all points"], ans: 3, exp: "The field lines inside a solenoid are parallel straight lines, indicating a uniform magnetic field at all points." },
        { q: "A device that detects the presence of electric current in a circuit is:", opts: ["Ammeter", "Voltmeter", "Galvanometer", "Motor"], ans: 2, exp: "A galvanometer can detect very faint currents and show the direction of current flow." },
        { q: "The core of an electromagnet is usually made of:", opts: ["Steel", "Copper", "Soft iron", "Aluminum"], ans: 2, exp: "Soft iron is used because it easily magnetizes when current flows and completely loses its magnetism when the current is switched off." }
    ],

    // ------------------------------------------
    // CHEMISTRY
    // ------------------------------------------
    "Science-Chemistry-ChemicalReactionsandEquations": [
        { q: "When magnesium ribbon is burnt in air, the ash formed is:", opts: ["Black", "White", "Yellow", "Pink"], ans: 1, exp: "Magnesium burns with a dazzling white flame and changes into a white powder called Magnesium Oxide (MgO)." },
        { q: "The reaction 2H₂ + O₂ → 2H₂O is an example of:", opts: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement reaction"], ans: 0, exp: "Two simple substances (Hydrogen and Oxygen) combine to form a single new product (Water)." },
        { q: "Which of the following is an endothermic reaction?", opts: ["Burning of natural gas", "Respiration", "Decomposition of calcium carbonate", "Reaction of quick lime with water"], ans: 2, exp: "Decomposing calcium carbonate requires continuous heating, meaning it absorbs energy (endothermic)." },
        { q: "When iron nails are kept in CuSO₄ solution, the blue color changes to:", opts: ["Red", "Green", "Colorless", "Black"], ans: 1, exp: "Iron is more reactive than copper. It displaces copper to form Iron (II) Sulphate (FeSO₄), which is pale green." },
        { q: "Rancidity of oils can be prevented by adding:", opts: ["Water", "Antioxidants", "Oxygen", "Acid"], ans: 1, exp: "Antioxidants prevent the oxidation of fats and oils, keeping food from smelling and tasting foul." },
        { q: "What type of reaction is: Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)?", opts: ["Combination", "Displacement", "Double Displacement", "Redox"], ans: 2, exp: "There is an exchange of ions between the two reactants to form a white precipitate of Barium Sulphate." },
        { q: "In the reaction CuO + H₂ → Cu + H₂O, the substance oxidized is:", opts: ["CuO", "H₂", "Cu", "H₂O"], ans: 1, exp: "Hydrogen (H₂) gains oxygen to become H₂O. The substance that gains oxygen is the one being oxidized." },
        { q: "To balance: Fe + H₂O → Fe₃O₄ + H₂, the coefficient of H₂O must be:", opts: ["2", "3", "4", "5"], ans: 2, exp: "There are 4 oxygen atoms in Fe₃O₄, so you need 4 H₂O molecules on the left to balance the oxygen." }
    ],

    "Science-Chemistry-AcidsBasesandSalts": [
        { q: "The pH of a neutral solution is:", opts: ["0", "7", "14", "Between 1 and 6"], ans: 1, exp: "Pure water and neutral solutions have a pH of exactly 7." },
        { q: "Which acid is present in tamarind?", opts: ["Tartaric acid", "Citric acid", "Lactic acid", "Oxalic acid"], ans: 0, exp: "Tamarind naturally contains tartaric acid. (Citric is lemons, Lactic is curd, Oxalic is tomatoes)." },
        { q: "When an acid reacts with a metal, which gas is usually evolved?", opts: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], ans: 3, exp: "Metals displace hydrogen from acids, producing hydrogen gas which burns with a 'pop' sound." },
        { q: "Bleaching powder is chemically:", opts: ["CaSO₄", "CaOCl₂", "NaHCO₃", "Na₂CO₃"], ans: 1, exp: "It is Calcium Oxychloride (CaOCl₂), produced by the action of chlorine on dry slaked lime." },
        { q: "Baking soda is:", opts: ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Sodium hydroxide"], ans: 1, exp: "Baking soda is Sodium Hydrogen Carbonate (NaHCO₃), also called sodium bicarbonate." },
        { q: "Plaster of Paris is obtained by heating:", opts: ["Limestone", "Gypsum", "Baking soda", "Washing soda"], ans: 1, exp: "Heating Gypsum (CaSO₄·2H₂O) at 373K causes it to lose water molecules and become Plaster of Paris." },
        { q: "Phenolphthalein in an acidic solution is:", opts: ["Pink", "Colorless", "Red", "Yellow"], ans: 1, exp: "Phenolphthalein is a synthetic indicator that remains colorless in acids and turns pink in bases." },
        { q: "Antacids contain:", opts: ["Strong acids", "Strong bases", "Mild bases", "Salts"], ans: 2, exp: "Mild bases like Magnesium Hydroxide (Milk of Magnesia) are used to neutralize excess stomach acid." }
    ],

    "Science-Chemistry-MetalsandNonmetals": [
        { q: "The most malleable metal is:", opts: ["Iron", "Copper", "Gold", "Aluminum"], ans: 2, exp: "Gold is the most malleable metal; a single gram can be beaten into an incredibly thin sheet." },
        { q: "A non-metal that is liquid at room temperature is:", opts: ["Mercury", "Bromine", "Iodine", "Chlorine"], ans: 1, exp: "Bromine is the only non-metal that is liquid at room temp. (Mercury is a metal)." },
        { q: "Which metal can be easily cut with a knife?", opts: ["Sodium", "Iron", "Copper", "Magnesium"], ans: 0, exp: "Alkali metals like Sodium and Potassium are so soft they can be sliced with a butter knife." },
        { q: "Ionic compounds generally have:", opts: ["Low melting points", "High melting points", "No melting points", "Low boiling points"], ans: 1, exp: "Ionic compounds form strong crystal lattices, requiring a large amount of energy (heat) to break the ionic bonds." },
        { q: "The process of heating an ore strongly in the presence of excess air is called:", opts: ["Calcination", "Roasting", "Smelting", "Refining"], ans: 1, exp: "Roasting is used for sulphide ores (using air). Calcination is used for carbonate ores (limited/no air)." },
        { q: "An alloy of copper and zinc is called:", opts: ["Bronze", "Solder", "Brass", "Steel"], ans: 2, exp: "Brass is Cu + Zn. (Bronze is Cu + Sn, Solder is Pb + Sn)." },
        { q: "When metals react with water, they form metal hydroxides and:", opts: ["Oxygen gas", "Hydrogen gas", "Carbon dioxide", "Chlorine"], ans: 1, exp: "Highly reactive metals violently strip oxygen from water, releasing highly flammable Hydrogen gas." },
        { q: "Which of the following does not react with cold water, hot water, or steam?", opts: ["Sodium", "Magnesium", "Iron", "Gold"], ans: 3, exp: "Gold is at the absolute bottom of the reactivity series, making it a noble metal that does not react with water or oxygen." }
    ],

    "Science-Chemistry-CarbonanditsCompounds": [
        { q: "The property of self-linking of carbon atoms through covalent bonds is called:", opts: ["Allotropy", "Isomerism", "Catenation", "Tetravalency"], ans: 2, exp: "Catenation allows carbon to form long chains, branched chains, and rings, which is why organic chemistry is so massive." },
        { q: "Buckminsterfullerene is an allotropic form of:", opts: ["Phosphorus", "Sulphur", "Carbon", "Tin"], ans: 2, exp: "It is a sphere-shaped carbon molecule containing 60 carbon atoms (C-60)." },
        { q: "The functional group -OH represents:", opts: ["Aldehyde", "Ketone", "Alcohol", "Carboxylic acid"], ans: 2, exp: "The -OH group attached to a carbon chain makes it an alcohol (like ethanol)." },
        { q: "The general formula for alkanes is:", opts: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnH2n+1"], ans: 1, exp: "Alkanes are saturated hydrocarbons with single bonds. Eg: Methane is CH4 (n=1, H=2(1)+2=4)." },
        { q: "Which of the following is used in making soap?", opts: ["Esterification", "Saponification", "Hydrogenation", "Combustion"], ans: 1, exp: "Saponification is the reaction of an ester with a strong base (like NaOH) to produce alcohol and the sodium salt of a carboxylic acid (soap)." },
        { q: "Unsaturated hydrocarbons add hydrogen in the presence of catalysts like nickel to form saturated hydrocarbons. This is:", opts: ["Substitution", "Addition", "Oxidation", "Combustion"], ans: 1, exp: "This is an addition reaction, commonly used to convert liquid vegetable oils into solid animal fats (ghee/margarine)." },
        { q: "The next member of the homologous series starting with C₂H₄ is:", opts: ["C₃H₈", "C₃H₆", "C₄H₈", "C₂H₆"], ans: 1, exp: "C₂H₄ is an alkene. The successive member differs by a -CH₂ unit. C₂H₄ + CH₂ = C₃H₆ (Propene)." },
        { q: "Vinegar is a 5-8% solution of which acid in water?", opts: ["Ethanoic acid", "Methanoic acid", "Citric acid", "Hydrochloric acid"], ans: 0, exp: "Ethanoic acid (Acetic acid) diluted in water forms vinegar." }
    ],

    // ------------------------------------------
    // BIOLOGY
    // ------------------------------------------
    "Science-Biology-LifeProcesses": [
        { q: "The process of taking in food and utilizing it is called:", opts: ["Respiration", "Nutrition", "Excretion", "Transportation"], ans: 1, exp: "Nutrition provides the organic molecules required to sustain life." },
        { q: "The tiny pores present on the surface of leaves are called:", opts: ["Guard cells", "Chloroplasts", "Stomata", "Mitochondria"], ans: 2, exp: "Stomata allow for massive amounts of gaseous exchange (CO2 in, O2 out) for photosynthesis." },
        { q: "In human beings, the digestion of proteins begins in the:", opts: ["Mouth", "Stomach", "Small intestine", "Large intestine"], ans: 1, exp: "The stomach secretes pepsin (an enzyme) and HCl to begin breaking down protein structures." },
        { q: "The functional unit of the human kidney is:", opts: ["Neuron", "Nephron", "Alveoli", "Villi"], ans: 1, exp: "Millions of nephrons filter the blood, reabsorb useful substances, and generate urine." },
        { q: "In plants, xylem is responsible for transport of:", opts: ["Food", "Water and minerals", "Oxygen", "Amino acids"], ans: 1, exp: "Xylem tissue acts like plumbing, pulling water and minerals upward from the roots to the leaves." },
        { q: "Breakdown of pyruvate to give carbon dioxide, water and energy takes place in:", opts: ["Cytoplasm", "Mitochondria", "Chloroplast", "Nucleus"], ans: 1, exp: "This is aerobic respiration, and the mitochondria are the 'powerhouses' where this energy extraction occurs." },
        { q: "The normal systolic and diastolic blood pressure in humans is:", opts: ["120/80 mm Hg", "80/120 mm Hg", "140/90 mm Hg", "100/60 mm Hg"], ans: 0, exp: "Systolic (pumping) is normally around 120, and diastolic (resting) is normally around 80." },
        { q: "Bile juice is secreted by:", opts: ["Stomach", "Pancreas", "Liver", "Gall bladder"], ans: 2, exp: "The Liver produces bile juice, which is then temporarily stored in the Gall bladder." }
    ],

    "Science-Biology-ControlandCoordination": [
        { q: "The gap between two neurons is called a:", opts: ["Dendrite", "Synapse", "Axon", "Impulse"], ans: 1, exp: "At the synapse, electrical signals are converted into chemical neurotransmitters to cross the gap." },
        { q: "The brain is responsible for:", opts: ["Thinking", "Regulating heartbeat", "Balancing the body", "All of the above"], ans: 3, exp: "The brain controls voluntary actions (thinking), involuntary actions (heartbeat), and equilibrium (balance)." },
        { q: "Which plant hormone promotes cell division?", opts: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"], ans: 2, exp: "Cytokinins are present in high concentrations in areas of rapid cell division, like fruits and seeds." },
        { q: "The hormone responsible for the 'fight or flight' response is:", opts: ["Insulin", "Thyroxin", "Adrenaline", "Testosterone"], ans: 2, exp: "Adrenaline is secreted directly into the blood and carried to target organs to prepare the body for emergency situations." },
        { q: "Iodine is necessary for the synthesis of which hormone?", opts: ["Adrenaline", "Thyroxin", "Insulin", "Growth hormone"], ans: 1, exp: "Thyroxin regulates carbohydrate, protein, and fat metabolism. Lack of iodine leads to goiter." },
        { q: "The part of the brain that controls posture and balance is:", opts: ["Cerebrum", "Medulla", "Cerebellum", "Pons"], ans: 2, exp: "The cerebellum (located in the hindbrain) ensures precision of voluntary actions and maintains equilibrium." },
        { q: "Involuntary actions like vomiting and blood pressure are controlled by:", opts: ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord"], ans: 2, exp: "The medulla in the hindbrain handles autonomous, background survival functions." },
        { q: "Growth of pollen tubes towards ovules is an example of:", opts: ["Phototropism", "Geotropism", "Chemotropism", "Hydrotropism"], ans: 2, exp: "The movement is a response to chemical signals secreted by the ovule (Chemotropism)." }
    ],

    "Science-Biology-HowdoOrganismsReproduce": [
        { q: "Asexual reproduction takes place through budding in:", opts: ["Amoeba", "Yeast", "Plasmodium", "Leishmania"], ans: 1, exp: "In yeast, a small bulb-like projection (bud) forms, detaches, and grows into a new organism." },
        { q: "The anther contains:", opts: ["Sepals", "Ovules", "Carpel", "Pollen grains"], ans: 3, exp: "The anther is the male reproductive part of the flower, producing the yellow, powdery pollen grains." },
        { q: "Fertilization in human females occurs in the:", opts: ["Uterus", "Ovary", "Fallopian tube", "Cervix"], ans: 2, exp: "The sperm meets the egg and fuses inside the Fallopian tube (oviduct) before traveling down to implant in the uterus." },
        { q: "Which of the following is a mechanical barrier method of contraception?", opts: ["Oral pills", "Copper-T", "Condom", "Surgical method"], ans: 2, exp: "Condoms physically block sperm from reaching the egg, acting as a mechanical barrier." },
        { q: "Vegetative propagation refers to formation of new plants from:", opts: ["Stem, roots and leaves", "Leaves, flowers and seed", "Stem, roots and seeds", "Fruits and seeds"], ans: 0, exp: "Vegetative propagation occurs when a non-reproductive part of a plant (like a leaf or stem) grows into a totally new plant." },
        { q: "The embryo gets nutrition from the mother's blood with the help of a special tissue called:", opts: ["Uterus", "Placenta", "Ovary", "Fallopian tube"], ans: 1, exp: "The placenta is a disc embedded in the uterine wall that transfers glucose and oxygen from the mother to the embryo." },
        { q: "Multiple fission occurs in:", opts: ["Amoeba", "Plasmodium", "Hydra", "Planaria"], ans: 1, exp: "Plasmodium (the malaria parasite) divides into many daughter cells simultaneously inside a cyst." },
        { q: "The period during adolescence when reproductive tissues begin to mature is called:", opts: ["Menstruation", "Gestation", "Puberty", "Ovulation"], ans: 2, exp: "Puberty marks the onset of sexual maturity, driven by hormones like testosterone and estrogen." }
    ],

    "Science-Biology-Heredity": [
        { q: "The rules of inheritance were pioneered by:", opts: ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Albert Einstein"], ans: 1, exp: "Mendel used garden peas to discover the fundamental laws of inheritance." },
        { q: "In humans, the sex of the child is determined by:", opts: ["The mother's chromosome", "The father's chromosome", "Diet during pregnancy", "Environment"], ans: 1, exp: "Women have XX chromosomes and men have XY. The child inherits an X from the mother, so the father's contribution (X or Y) determines the sex." },
        { q: "A trait in an organism which is not expressed in the presence of a contrasting trait is called:", opts: ["Dominant", "Recessive", "Inherited", "Acquired"], ans: 1, exp: "A recessive trait (like short height in pea plants, 't') only shows up if the dominant trait ('T') is absent." },
        { q: "The genotypic ratio of a monohybrid cross in the F2 generation is:", opts: ["3:1", "1:2:1", "9:3:3:1", "1:1"], ans: 1, exp: "While the phenotype (visible) ratio is 3 tall : 1 short, the genotype (genetic) ratio is 1(TT) : 2(Tt) : 1(tt)." },
        { q: "If a round, green seeded pea plant (RRyy) is crossed with wrinkled, yellow seeded pea plant (rrYY), the seeds in F1 generation will be:", opts: ["Round and yellow", "Round and green", "Wrinkled and yellow", "Wrinkled and green"], ans: 0, exp: "Round (R) and Yellow (Y) are dominant. The F1 generation will all be RrYy (Round and Yellow)." },
        { q: "Which of the following is an inherited trait?", opts: ["Scars", "Weight", "Eye color", "Language spoken"], ans: 2, exp: "Eye color is encoded in DNA. Things like scars and language are acquired during your lifetime and cannot be passed on genetically." },
        { q: "DNA stands for:", opts: ["Deoxyribo Nucleic Acid", "Deoxyribo Nitrogen Acid", "Di-Nucleic Acid", "Double Nitrogen Acid"], ans: 0, exp: "DNA is the fundamental molecule that carries the genetic instructions for life." },
        { q: "The section of DNA that provides information for one specific protein is called a:", opts: ["Chromosome", "Trait", "Nucleus", "Gene"], ans: 3, exp: "A gene is a distinct sequence of DNA that determines a single characteristic by encoding a specific protein." }
    ],

    "Science-Biology-OurEnvironment": [
        { q: "Which of the following are biodegradable?", opts: ["Plastic cups", "Glass bottles", "Banana peels", "Aluminum foil"], ans: 2, exp: "Biodegradable substances can be broken down by biological processes (bacteria/fungi)." },
        { q: "In a food chain, the third trophic level is always occupied by:", opts: ["Producers", "Herbivores", "Carnivores", "Decomposers"], ans: 2, exp: "Level 1: Producers (Plants). Level 2: Primary Consumers (Herbivores). Level 3: Secondary Consumers (Carnivores)." },
        { q: "Depletion of the ozone layer is mainly due to:", opts: ["Carbon dioxide", "Methane", "Chlorofluorocarbons (CFCs)", "Carbon monoxide"], ans: 2, exp: "CFCs (used in old refrigerators and aerosols) rise to the stratosphere and chemically destroy ozone molecules." },
        { q: "According to the 10% law, how much energy is available to the next trophic level?", opts: ["100%", "10%", "1%", "50%"], ans: 1, exp: "Only about 10% of the energy from organic matter is transferred to the next level; the rest is lost as heat." },
        { q: "The phenomenon where harmful chemicals accumulate in higher concentrations at each trophic level is called:", opts: ["Biomagnification", "Eutrophication", "Biodegradation", "Pollution"], ans: 0, exp: "Because top predators eat many prey animals, they absorb and store all the toxins those animals accumulated, a process called biological magnification." },
        { q: "Which of the following constitutes a food chain?", opts: ["Grass, wheat and mango", "Grass, goat and human", "Goat, cow and elephant", "Grass, fish and goat"], ans: 1, exp: "A valid chain requires energy transfer: The goat eats the grass, and the human eats the goat." },
        { q: "The ozone layer protects us from harmful:", opts: ["Infrared radiation", "Visible light", "Ultraviolet (UV) radiation", "X-rays"], ans: 2, exp: "Ozone (O3) acts as a shield, absorbing the sun's high-energy UV radiation that can cause skin cancer." },
        { q: "Organisms which synthesize carbohydrates from inorganic compounds using radiant energy are called:", opts: ["Decomposers", "Producers", "Herbivores", "Carnivores"], ans: 1, exp: "Producers (autotrophs) are the foundation of an ecosystem because they can convert sunlight into usable chemical energy." }
    ]
});


// ==========================================
// SECRET NOTES VAULT (Science Populated)
// ==========================================

Object.assign(secretNotesVault, {
    // ------------------------------------------
    // PHYSICS
    // ------------------------------------------
    "Science-Physics-LightReflectionRefraction": `
        <div class="n-title">LIGHT: Reflection & Refraction</div>
        <div class="n-section">
            <div class="n-h3">1. Laws of Reflection</div>
            <p>• Angle of incidence equals angle of reflection <span class="n-hl">∠i = ∠r</span>.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Spherical Mirrors</div>
            <p>• <span class="n-hl">Concave Mirror:</span> Converging mirror. Used in torches, dentist mirrors.</p>
            <p>• <span class="n-hl">Convex Mirror:</span> Diverging mirror. Used as rear-view mirrors.</p>
            <div class="n-formula">Mirror Formula: 1/v + 1/u = 1/f</div>
        </div>
        <div class="n-section">
            <div class="n-h3">3. Refraction & Lenses</div>
            <p>• <span class="n-hl">Snell's Law:</span> sin(i) / sin(r) = constant (Refractive Index).</p>
            <div class="n-formula">Lens Formula: 1/v - 1/u = 1/f</div>
            <div class="n-formula">Power (P) = 1 / f (in meters). Unit: Dioptre</div>
        </div>
    `,

    "Science-Physics-TheHumanEye": `
        <div class="n-title">THE HUMAN EYE & COLORFUL WORLD</div>
        <div class="n-section">
            <div class="n-h3">1. Eye Defects & Correction</div>
            <p>• <span class="n-hl">Myopia (Near-sightedness):</span> Cannot see far. Corrected with Concave lens.</p>
            <p>• <span class="n-hl">Hypermetropia (Far-sightedness):</span> Cannot see near. Corrected with Convex lens.</p>
            <p>• <span class="n-hl">Presbyopia:</span> Age-related loss of accommodation. Corrected with Bifocal lens.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Atmospheric Phenomena</div>
            <p>• <span class="n-hl">Dispersion:</span> Splitting of white light into VIBGYOR through a prism.</p>
            <p>• <span class="n-hl">Atmospheric Refraction:</span> Causes twinkling of stars and advance sunrise.</p>
            <p>• <span class="n-hl">Scattering:</span> Causes the blue color of the sky and red sunrise/sunset.</p>
        </div>
    `,

    "Science-Physics-Electricity": `
        <div class="n-title">ELECTRICITY</div>
        <div class="n-section">
            <div class="n-h3">1. Ohm's Law & Resistance</div>
            <div class="n-formula">V = I × R</div>
            <p>• Factors affecting Resistance: Length (directly proportional), Area (inversely proportional), Material, Temp.</p>
            <div class="n-formula">Resistivity (ρ) = (R × A) / L</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Circuits & Heating</div>
            <p>• Series: <span class="n-hl">R = R₁ + R₂ + R₃</span> (Current is constant)</p>
            <p>• Parallel: <span class="n-hl">1/R = 1/R₁ + 1/R₂ + 1/R₃</span> (Voltage is constant)</p>
            <div class="n-formula">Joule's Law of Heating: H = I²Rt</div>
            <div class="n-formula">Power (P) = VI = I²R = V²/R</div>
        </div>
    `,

    "Science-Physics-MagneticEffectsofCurrent": `
        <div class="n-title">MAGNETIC EFFECTS OF CURRENT</div>
        <div class="n-section">
            <div class="n-h3">1. Magnetic Fields</div>
            <p>• Field lines emerge from <span class="n-hl">North</span> and merge at <span class="n-hl">South</span>.</p>
            <p>• Inside a <span class="n-hl">solenoid</span>, field lines are parallel, uniform straight lines.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Vital Rules</div>
            <p>• <span class="n-hl">Right-Hand Thumb Rule:</span> Thumb = Current, Fingers = Magnetic Field.</p>
            <p>• <span class="n-hl">Fleming's Left-Hand Rule (Motors):</span> Thumb = Force, Forefinger = Field, Middle = Current.</p>
        </div>
    `,

    // ------------------------------------------
    // CHEMISTRY
    // ------------------------------------------
    "Science-Chemistry-ChemicalReactionsandEquations": `
        <div class="n-title">CHEMICAL REACTIONS & EQUATIONS</div>
        <div class="n-section">
            <div class="n-h3">1. Types of Reactions</div>
            <p>• <span class="n-hl">Combination:</span> A + B → AB</p>
            <p>• <span class="n-hl">Decomposition:</span> AB → A + B (Requires Heat/Light/Electricity)</p>
            <p>• <span class="n-hl">Displacement:</span> More reactive metal kicks out less reactive metal.</p>
            <p>• <span class="n-hl">Double Displacement:</span> Mutual exchange of ions (Often forms precipitates).</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Redox & Everyday Effects</div>
            <p>• <span class="n-hl">Oxidation:</span> Gain of Oxygen / Loss of Hydrogen.</p>
            <p>• <span class="n-hl">Reduction:</span> Loss of Oxygen / Gain of Hydrogen.</p>
            <p>• <span class="n-hl">Rancidity:</span> Oxidation of fats in food (Prevented with N₂ gas or antioxidants).</p>
        </div>
    `,

    "Science-Chemistry-AcidsBasesandSalts": `
        <div class="n-title">ACIDS, BASES AND SALTS</div>
        <div class="n-section">
            <div class="n-h3">1. The pH Scale</div>
            <p>• pH < 7 is Acidic. pH = 7 is Neutral. pH > 7 is Basic.</p>
            <p>• Litmus: Acid turns Blue to <span class="n-hl">Red</span>. Base turns Red to <span class="n-hl">Blue</span>.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Important Salts</div>
            <p>• <span class="n-hl">Bleaching Powder:</span> CaOCl₂ (Water purification, bleaching).</p>
            <p>• <span class="n-hl">Baking Soda:</span> NaHCO₃ (Antacid, baking).</p>
            <p>• <span class="n-hl">Washing Soda:</span> Na₂CO₃·10H₂O (Removing water hardness).</p>
            <div class="n-formula">Plaster of Paris: CaSO₄·½H₂O</div>
        </div>
    `,

    "Science-Chemistry-MetalsandNonmetals": `
        <div class="n-title">METALS AND NON-METALS</div>
        <div class="n-section">
            <div class="n-h3">1. Chemical Properties</div>
            <p>• Metals react with Oxygen to form <span class="n-hl">Basic Oxides</span> (e.g., MgO).</p>
            <p>• Non-metals form <span class="n-hl">Acidic Oxides</span> (e.g., CO₂).</p>
            <p>• <span class="n-hl">Amphoteric Oxides:</span> React with both acids and bases (Al₂O₃, ZnO).</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Metallurgy</div>
            <p>• <span class="n-hl">Roasting:</span> Heating sulphide ores in presence of excess air.</p>
            <p>• <span class="n-hl">Calcination:</span> Heating carbonate ores in limited air.</p>
            <p>• <span class="n-hl">Alloy:</span> Homogeneous mixture of metals (Brass = Cu+Zn, Bronze = Cu+Sn).</p>
        </div>
    `,

    "Science-Chemistry-CarbonanditsCompounds": `
        <div class="n-title">CARBON AND ITS COMPOUNDS</div>
        <div class="n-section">
            <div class="n-h3">1. Carbon's Superpowers</div>
            <p>• <span class="n-hl">Tetravalency:</span> Needs 4 electrons to complete its octet.</p>
            <p>• <span class="n-hl">Catenation:</span> Unique ability to form long chains with other carbon atoms.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Functional Groups & Soaps</div>
            <p>• Alcohol (-OH), Aldehyde (-CHO), Ketone (-CO-), Carboxylic Acid (-COOH).</p>
            <p>• <span class="n-hl">Saponification:</span> Ester + NaOH → Soap + Alcohol.</p>
            <p>• <span class="n-hl">Micelles:</span> Hydrophobic tail attaches to dirt; Hydrophilic head stays in water.</p>
        </div>
    `,

    // ------------------------------------------
    // BIOLOGY
    // ------------------------------------------
    "Science-Biology-LifeProcesses": `
        <div class="n-title">LIFE PROCESSES</div>
        <div class="n-section">
            <div class="n-h3">1. Nutrition & Respiration</div>
            <p>• <span class="n-hl">Autotrophic:</span> Plants use photosynthesis (requires sunlight, chlorophyll, CO₂, H₂O).</p>
            <p>• <span class="n-hl">Aerobic Respiration:</span> Breakdown of glucose in mitochondria WITH oxygen (yields high energy).</p>
            <p>• <span class="n-hl">Anaerobic Respiration:</span> Without oxygen (yields lactic acid in muscles, ethanol in yeast).</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Transportation & Excretion</div>
            <p>• <span class="n-hl">Xylem:</span> Transports Water upward. <span class="n-hl">Phloem:</span> Transports Food (Translocation).</p>
            <p>• <span class="n-hl">Nephron:</span> The filtration unit of the kidney.</p>
        </div>
    `,

    "Science-Biology-ControlandCoordination": `
        <div class="n-title">CONTROL AND COORDINATION</div>
        <div class="n-section">
            <div class="n-h3">1. The Nervous System</div>
            <p>• <span class="n-hl">Synapse:</span> The gap between neurons where chemical signals jump.</p>
            <p>• <span class="n-hl">Cerebrum:</span> Thinking/Voluntary. <span class="n-hl">Cerebellum:</span> Balance. <span class="n-hl">Medulla:</span> Involuntary.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Hormones</div>
            <p>• <span class="n-hl">Plant:</span> Auxin (shoot growth), Cytokinin (cell division), Abscisic acid (inhibits growth/wilting).</p>
            <p>• <span class="n-hl">Animal:</span> Thyroxin (metabolism - needs Iodine), Adrenaline (fight/flight), Insulin (blood sugar).</p>
        </div>
    `,

    "Science-Biology-HowdoOrganismsReproduce": `
        <div class="n-title">REPRODUCTION</div>
        <div class="n-section">
            <div class="n-h3">1. Asexual Reproduction</div>
            <p>• <span class="n-hl">Fission:</span> Amoeba (Binary), Plasmodium (Multiple).</p>
            <p>• <span class="n-hl">Budding:</span> Yeast, Hydra.</p>
            <p>• <span class="n-hl">Vegetative Propagation:</span> Growing new plants from stems, roots, leaves.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Human Reproduction</div>
            <p>• <span class="n-hl">Placenta:</span> Special tissue providing nutrition from mother to embryo.</p>
            <p>• <span class="n-hl">Contraception:</span> Mechanical (Condoms), Chemical (Pills), Surgical (Vasectomy/Tubectomy).</p>
        </div>
    `,

    "Science-Biology-Heredity": `
        <div class="n-title">HEREDITY</div>
        <div class="n-section">
            <div class="n-h3">1. Mendel's Work</div>
            <p>• Used garden peas (Pisum sativum) due to clear contrasting traits.</p>
            <p>• <span class="n-hl">Dominant Trait:</span> Expresses itself (T). <span class="n-hl">Recessive:</span> Suppressed (t).</p>
            <div class="n-formula">Monohybrid Phenotype Ratio = 3:1</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Sex Determination</div>
            <p>• Females have perfect pair <span class="n-hl">XX</span>. Males have mismatched <span class="n-hl">XY</span>.</p>
            <p>• The sex of the child is strictly determined by what chromosome the father contributes.</p>
        </div>
    `,

    "Science-Biology-OurEnvironment": `
        <div class="n-title">OUR ENVIRONMENT</div>
        <div class="n-section">
            <div class="n-h3">1. Ecosystem Flow</div>
            <p>• <span class="n-hl">10% Law:</span> Only 10% of energy is transferred from one trophic level to the next.</p>
            <p>• <span class="n-hl">Biological Magnification:</span> Harmful chemicals concentrate heavily in top predators.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Ozone Layer</div>
            <p>• Protects Earth from deadly UV radiation.</p>
            <p>• Being depleted heavily by <span class="n-hl">Chlorofluorocarbons (CFCs)</span>.</p>
        </div>
    `
});
