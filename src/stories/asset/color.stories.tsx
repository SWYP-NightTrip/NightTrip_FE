import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const COLORS = {
  Primary: [
    { name: 'Primary 800', var: '--nt-primary-800', hex: '#2F2E57', desc: 'Dark Mode' },
    {
      name: 'Primary 600',
      var: '--nt-primary-600',
      hex: '#5E5BAE',
      desc: 'CTA, 버튼 클릭 등 주요 액션 강조',
    },
    {
      name: 'Primary 500',
      var: '--nt-primary-500',
      hex: '#7672DA',
      desc: 'Main Color, 메인 버튼, 주요 기능 강조',
    },
    { name: 'Primary 400', var: '--nt-primary-400', hex: '#918EE1', desc: '버튼 호버, 강조' },
    { name: 'Primary 200', var: '--nt-primary-200', hex: '#CC87F0', desc: '박스 배경 1' },
    { name: 'Primary 100', var: '--nt-primary-100', hex: '#E4E3F8', desc: '박스 배경 2' },
  ],
  Secondary: [
    { name: 'Secondary 600', var: '--nt-secondary-600', hex: '#C592B6', desc: '600' },
    { name: 'Secondary 500', var: '--nt-secondary-500', hex: '#F6B7E3', desc: '토스트 배너 배경' },
    { name: 'Secondary 400', var: '--nt-secondary-400', hex: '#FAD4EE', desc: '호버 색상' },
    { name: 'Secondary 200', var: '--nt-secondary-200', hex: '#FBE2F4', desc: '200' },
    {
      name: 'Secondary 100',
      var: '--nt-secondary-100',
      hex: '#FDF1F9',
      desc: '박스 배경, 배경 화면, 그라데이션',
    },
  ],
  Accent: [
    {
      name: 'Accent Yellow 500',
      var: '--nt-accent-yellow-500',
      hex: '#FFD469',
      desc: '별, 달 등 일러스트 강조 요소',
    },
    {
      name: 'Accent Yellow 300',
      var: '--nt-accent-yellow-300',
      hex: '#FFE5A5',
      desc: '불빛 등 일러스트 요소',
    },
    {
      name: 'Accent Yellow 100',
      var: '--nt-accent-yellow-100',
      hex: '#FFF6E1',
      desc: '불빛 등 일러스트 요소',
    },
    {
      name: 'Accent Blue 500',
      var: '--nt-accent-blue-500',
      hex: '#4A90E2',
      desc: '하늘색, 바다 표현',
    },
    {
      name: 'Accent Blue 600',
      var: '--nt-accent-blue-600',
      hex: '#3B83F6',
      desc: '하늘색, 바다 표현',
    },
  ],
  Semantic: [
    { name: 'Error', var: '--nt-error', hex: '#F14668', desc: '에러' },
    { name: 'Warn', var: '--nt-warn', hex: '#FFB700', desc: '경고' },
    { name: 'Success', var: '--nt-success', hex: '#3CD882', desc: '성공, 완료, 안전' },
  ],
  Neutral: [
    {
      name: 'Neutral 50',
      var: '--nt-neutral-50',
      hex: '#FAF9FF',
      desc: '박스/배경1 (가장 밝은 회백색)',
    },
    {
      name: 'Neutral 100',
      var: '--nt-neutral-100',
      hex: '#F4F3FA',
      desc: '박스/배경2 (연보라빛 회색)',
    },
    {
      name: 'Neutral 200',
      var: '--nt-neutral-200',
      hex: '#DAD9E3',
      desc: '섹션 구분, 버튼 외곽선 (연회색 보더)',
    },
    {
      name: 'Neutral 250',
      var: '--nt-neutral-250',
      hex: '#DEDEDE',
      desc: '입력필드 회색 박스 테두리',
    },
    {
      name: 'Neutral 300',
      var: '--nt-neutral-300',
      hex: '#B5B4BA',
      desc: '인풋박스 등 입력 필드 내 설명, 설명 텍스트',
    },
    { name: 'Neutral 400', var: '--nt-neutral-400', hex: '#5C5C5C', desc: '서브 텍스트' },
    {
      name: 'Neutral Black',
      var: '--nt-neutral-black',
      hex: '#000000',
      desc: '헤더/타이틀 텍스트',
    },
    {
      name: 'Neutral White',
      var: '--nt-neutral-white',
      hex: '#FFFFFF',
      desc: '다크 모드/어두운 배경 위의 폰트 컬러',
    },
  ],
};

function ColorBox({ hex, name, desc }: { hex: string; name: string; desc: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
      <div
        style={{
          width: 48,
          height: 48,
          background: hex,
          borderRadius: 8,
          border: '1px solid #eee',
        }}
      />
      <div>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 12, color: '#555' }}>{hex}</div>
        <div style={{ fontSize: 12, color: '#888' }}>{desc}</div>
      </div>
    </div>
  );
}

function ColorSection({ title, colors }: { title: string; colors: typeof COLORS.Primary }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {colors.map(color => (
          <ColorBox key={color.name} {...color} />
        ))}
      </div>
    </section>
  );
}

const ColorPalette = () => (
  <div style={{ padding: 32, background: '#fff', borderRadius: 16, maxWidth: 900 }}>
    <h2 style={{ fontWeight: 800, fontSize: 28, marginBottom: 24 }}>NightTrip 컬러 시스템</h2>
    <ColorSection title="Primary - 메인 테마 컬러" colors={COLORS.Primary} />
    <ColorSection title="Secondary - 두 번째 중요 컬러" colors={COLORS.Secondary} />
    <ColorSection title="Accent - 일러스트 등 요소 컬러" colors={COLORS.Accent} />
    <ColorSection title="Semantic - 액션 컬러" colors={COLORS.Semantic} />
    <ColorSection title="Neutral - 뉴트럴 컬러" colors={COLORS.Neutral} />
  </div>
);

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/Color',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'NightTrip 프로젝트의 컬러 시스템 가이드입니다. globals.css의 컬러 변수와 HEX값, 용도를 한눈에 볼 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
export const Default: StoryObj<typeof ColorPalette> = {};
