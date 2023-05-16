import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { FlexBody } from '@/components/blocks/containers/body/flex';
import StyledComponentsRegistry from '@/styles/styled-components/registry';
import { ThemeContextProvider } from '@/contexts/theme';
import GlobalStyle from '@/styles/global';
import { HeaderLayout } from './components/layout/header';
import { MainLayout } from './components/layout/main';
import { FooterLayout } from './components/layout/footer';

export const metadata: Metadata = {
  title: 'Raffa-Dev | Portfolio',
  description:
    'Portfólio desenvolvedor web front-end, com conhecimento em Recat, Nextjs, Styled-components, Jest, entre outras tecnologias utilizadas no bom desenvolvimento de UIs.',
  authors: { name: 'Rafael da Conceição' },
  viewport: { width: 'device-width', initialScale: 1 }
};

const poppins = Poppins({
  weight: '300',
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <StyledComponentsRegistry>
        <FlexBody direction="column" minheight="100vh" position="relative">
          <ThemeContextProvider>
            <GlobalStyle />
            <HeaderLayout />
            <MainLayout>{children}</MainLayout>
            <FooterLayout />
          </ThemeContextProvider>
        </FlexBody>
      </StyledComponentsRegistry>
    </html>
  );
}
