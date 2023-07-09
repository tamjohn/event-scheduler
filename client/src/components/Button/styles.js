// import styled from 'styled-components';
// import { colors, fonts } from '../../styles/themes';
// import { toRem } from '../../styles/themes';

// var WrapperProps = {
//     theme: undefined,
//     width: undefined
// };

// export const WrapperStyled = styled.button < WrapperProps > `
//     ${fonts.lato.H14}
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: ${({ width }) => width};
//     padding: ${({ theme }) => {
//         switch (theme) {
//             case 'quaternary':
//                 return 0;
//             default:
//                 return `${toRem(10)} ${toRem(16)}`;
//         }
//     }};
//     border-radius: ${toRem(4)};
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     ${({ theme }) => theme === 'text-only' && 'text-decoration: underline;'}
  
//     border: 1px solid ${({ theme }) => {
//         switch (theme) {
//             case 'secondary':
//                 return colors.color1;
//             case 'tertiary':
//                 return colors.color9;
//             case 'quaternary':
//                 return colors.transparent;
//             case 'text-only':
//                 return colors.transparent;
//             case 'calendar':
//                 return colors.color15;
//             default:
//                 return colors.color2;
//         }
//     }};
  
//     background-color: ${({ theme }) => {
//         switch (theme) {
//             case 'secondary':
//                 return colors.transparent;
//             case 'tertiary':
//                 return colors.color9;
//             case 'quaternary':
//                 return colors.transparent;
//             case 'text-only':
//                 return colors.transparent;
//             case 'calendar':
//                 return colors.color15;
//             default:
//                 return colors.color2;
//         }
//     }};
  
//     color: ${({ theme }) => {
//         switch (theme) {
//             case 'secondary':
//                 return colors.color1;
//             case 'quaternary':
//                 return colors.color10;
//             case 'calendar':
//                 return colors.color1;
//             case 'text-only':
//                 return colors.color12;
//             default:
//                 return colors.color4;
//         }
//     }};
  
//     &:hover {
//       background-color: ${({ theme }) => {
//         switch (theme) {
//             case 'secondary':
//                 return colors.color1;
//             case 'tertiary':
//                 return colors.color10;
//             case 'quaternary':
//                 return colors.transparent;
//             case 'text-only':
//                 return colors.transparent;
//             case 'calendar':
//                 return colors.color13;
//             default:
//                 return colors.color8;
//         }
//     }};
      
//       border: 1px solid ${({ theme }) => {
//         switch (theme) {
//             case 'secondary':
//                 return colors.color1;
//             case 'tertiary':
//                 return colors.color10;
//             case 'quaternary':
//                 return colors.transparent;
//             case 'text-only':
//                 return colors.transparent;
//             case 'calendar':
//                 return colors.color13;
//             default:
//                 return colors.color8;
//         }
//     }};
  
//       color: ${({ theme }) => {
//         switch (theme) {
//             case 'secondary':
//                 return colors.color4;
//             case 'quaternary':
//                 return colors.color10;
//             case 'text-only':
//                 return colors.color2;
//             default:
//                 return colors.color4;
//         }
//     }};
  
//       ${({ theme }) => theme === 'text-only' && 'text-decoration: underline;'}
  
//     }
  
//     &:disabled {
//       cursor: not-allowed;
//       opacity: 0.5;
//     }
//   `;