// import React, { useEffect, useState } from 'react';
// import * as Styled from './styles';

// var ButtonProps = {
//     children: React.ReactNode,
//     onClick: React.MouseEventHandler,
//     type: 'button' | 'submit' | 'reset',
//     disabled: boolean,
//     loading: boolean,
//     theme: Theme,
//     width: string,
//     className: string,
//     skipSecurity: boolean,
// };

// export const Button = ({
//     children,
//     onClick,
//     type = 'button',
//     disabled = false,
//     loading = false,
//     theme = 'primary',
//     width,
//     className,
//     skipSecurity = false,
// }) => {
//     const [disableState, setDisableState] = useState(disabled);
//     // const hook = useUserInfo();

//     useEffect(() => {
//         if (skipSecurity) {
//             setDisableState(disabled);
//         } else {
//             setDisableState(!hook.hookCanWrite);
//         }
//     }, [disabled, skipSecurity, hook.hookCanWrite]);

//     return (
//         <Styled.WrapperStyled
//             onClick={onClick}
//             type={type}
//             disabled={disableState}
//             theme={theme}
//             width={width}
//             className={className}
//         >
//             {!loading && children}
//             {/* {loading && <Spinner theme={theme} />} */}
//         </Styled.WrapperStyled>
//     );
// };
