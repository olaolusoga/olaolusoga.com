"use client";

import { useState } from "react";
import { careers } from "@/lib/careers";
import { hobbies } from "@/lib/hobbies";
import { strengths, virtueColors, virtueLabels } from "@/lib/strengths";
import CareerCard from "@/components/CareerCard";
import HobbyCard from "@/components/HobbyCard";
import { StrengthId } from "@/lib/types";

type Tab = "careers" | "hobbies";

const hobbyCategories = ["All", "Physical", "Creative", "Intellectual", "Social", "Mindful"];

export default function ExplorePage() {
  const [tab, setTab] = useState<Tab>("careers");
  const [filterStrength, setFilterStrength] = useState<StrengthId | "all">("all");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredCareers =
    filterStrength === "all"
      ? careers
      : careers.filter((c) => c.strengths.includes(filterStrength));

  const filteredHobbies = hobbies.filter((h) => {
    const strengthMatch = filterStrength === "all" || h.strengths.includes(filterStrength);
    const categoryMatch = filterCategory === "All" || h.category === filterCategory;
    return strengthMatch && categoryMatch;
  });

  const tabStyle = (active: boolean) => ({
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: active ? "var(--surface-2)" : "transparent",
    color: active ? "var(--text)" : "var(--text-muted)",
    fontWeight: active ? 600 : 500,
    fontSize: "0.9375rem",
    cursor: "pointer",
    transition: "all 0.15s",
  });

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px 100px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 10,
          }}
        >
          Explore
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Browse all 20 career paths and 20 hobbies. Filter by strength to see what aligns with you.
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "inline-flex",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: 4,
          marginBottom: 32,
          gap: 4,
        }}
      >
        <button style={tabStyle(tab === "careers")} onClick={() => setTab("careers")}>
          💼 Careers ({filteredCareers.length})
        </button>
        <button style={tabStyle(tab === "hobbies")} onClick={() => setTab("hobbies")}>
          🎯 Hobbies ({filteredHobbies.length})
        </button>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Filter by Strength
          </label>
          <select
            value={filterStrength}
            onChange={(e) => setFilterStrength(e.target.value as StrengthId | "all")}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "8px 12px",
              color: "var(--text)",
              fontSize: "0.875rem",
              cursor: "pointer",
              minWidth: 200,
            }}
          >
            <option value="all">All Strengths</option>
            {Object.entries(virtueLabels).map(([virtue, label]) => (
              <optgroup key={virtue} label={label}>
                {strengths
                  .filter((s) => s.virtue === virtue)
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        {tab === "hobbies" && (
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Category
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {hobbyCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: "1px solid",
                    borderColor: filterCategory === cat ? "var(--accent-light)" : "var(--border)",
                    background:
                      filterCategory === cat ? "var(--accent-glow)" : "var(--surface)",
                    color: filterCategory === cat ? "var(--accent-light)" : "var(--text-muted)",
                    fontSize: "0.8125rem",
                    fontWeight: filterCategory === cat ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filter active badge */}
      {filterStrength !== "all" && (
        <div
          style={{
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {(() => {
            const s = strengths.find((x) => x.id === filterStrength);
            if (!s) return null;
            const color = virtueColors[s.virtue];
            return (
              <span
                className="badge"
                style={{
                  background: `${color}15`,
                  color,
                  border: `1px solid ${color}30`,
                }}
              >
                Filtered: {s.name}
              </span>
            );
          })()}
          <button
            onClick={() => setFilterStrength("all")}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              fontSize: "0.8125rem",
            }}
          >
            Clear ✕
          </button>
        </div>
      )}

      {/* Grid */}
      {tab === "careers" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {filteredCareers.length === 0 ? (
            <p style={{ color: "var(--text-muted)", gridColumn: "1/-1" }}>
              No careers match this filter.
            </p>
          ) : (
            filteredCareers.map((c) => <CareerCard key={c.id} career={c} />)
          )}
        </div>
      )}

      {tab === "hobbies" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {filteredHobbies.length === 0 ? (
            <p style={{ color: "var(--text-muted)", gridColumn: "1/-1" }}>
              No hobbies match this filter.
            </p>
          ) : (
            filteredHobbies.map((h) => <HobbyCard key={h.id} hobby={h} />)
          )}
        </div>
      )}
    </div>
  );
}
