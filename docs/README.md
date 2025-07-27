# TeleGrade-NTN6G-Voicelab

## Introduce

An end-to-end telecom-grade narrowband NTN (6G) speech prototype with adaptive LYBuCB bitrate control.

## Demo Contents & Modules

Navigate through the demo sections to explore different aspects of our scheme's performance:

1. **Quantized Voice Reconstruction:**
    * **What it shows:** Side-by-side comparisons of original speech samples with their reconstructed versions after multi-level quantization
    * **Key Insight:** Directly listen to the perceived quality improvements as the quantization level (and thus bitrate) increases. Objective MoS (Mean Opinion Score) values are provided for quantitative assessment.

2. **Mel Spectrogram Comparisons:**
    * **What it shows:** Visual comparisons of Mel spectrograms for original and reconstructed speech at different quantization levels.
    * **Key Insight:** Observe the visual representation of spectral detail preservation at higher bitrates and the graceful degradation at lower bitrates, corresponding to the audible quality changes.

3. **LYBUCB System Results:**
    * **What it shows:**
        * **SINR Curve:** A plot demonstrating the channel's SINR fluctuations over time during a simulation run.
        * **System Demonstration Video:** A short video illustrating the adaptive behavior of our LYBuCB algorithm, queue stability, and the overall system's real-time performance.
    * **Key Insight:** Understand how our LYBuCB algorithm intelligently adapts the bitrate to maintain voice quality and satisfy system constraints even when SINR drops significantly, crucial for robust NTN communication.

4. **Live System Demonstration:**
    * **What it shows:** This section is a placeholder for future interactive live demonstrations or more advanced visualizations of the system in action.
    * **Key Insight:** Indicates ongoing development and future capabilities of the project.

You can see the demo page on [demo](https://anonymous.4open.science/w/TeleGrade-NTN6G-VoiceLab-1F08/)
