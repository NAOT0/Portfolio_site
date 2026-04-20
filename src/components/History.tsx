// src/components/History.tsx
import { historyData } from "../data/history";

export const History = () => {
  return (
    <section className="history-section">
      <h2>History</h2>
      <div className="timeline">
        {historyData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.event}</h3>
              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline {
          border-left: 2px solid #ccc;
          padding-left: 20px;
          margin-left: 10px;
        }
        .timeline-item {
          margin-bottom: 20px;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -27px;
          top: 5px;
          width: 12px;
          height: 12px;
          background: #0070f3;
          border-radius: 50%;
        }
        .timeline-period {
          font-size: 0.9rem;
          color: #666;
        }
        .timeline-content h3 {
          margin: 5px 0;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};
