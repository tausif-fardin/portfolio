"use client";
import ResearchPaperLink from "./ResearchPaperLink";

const Publications = () => {
  return (
    <div>
      <ResearchPaperLink
        title="Stock Market Comparison and Analysis in Preceding and Following Pandemic
        in Bangladesh using Machine Learning Approaches"
        description="The main purpose of this paper is to predict the stock closing prices for two major stock exchanges in Bangladesh and compare the prediction accuracy based on before and after pandemic data. The implemented models are Autoregressive Integrated Moving Average(ARIMA) and Support Vector Machine(SVM) and Long Short-Term Memory (LSTM). Raw datasets were considered, which were collected from Dhaka Stock Exchange(DSE) and Chittagong Stock Exchange(CSE)."
        paperUrl="https://dl.acm.org/doi/10.1145/3542954.3542993"
      />
    </div>
  );
};

export default Publications;
